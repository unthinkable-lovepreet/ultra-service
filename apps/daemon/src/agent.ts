import path from "node:path";
import { query, type SDKMessage } from "@anthropic-ai/claude-agent-sdk";
import {
  MAX_TOOL_OUTPUT_BYTES,
  type Event,
} from "@ultra-service/shared/events";
import { isWithinWorkDir, truncate } from "./safety.js";

type RunAgentArgs = {
  promptId: string;
  text: string;
  workDir: string;
  signal: AbortSignal;
  emit: (ev: Event) => void;
};

const FILE_WRITE_TOOLS = new Set(["Write", "Edit", "MultiEdit", "NotebookEdit"]);

export async function runAgent({
  promptId,
  text,
  workDir,
  signal,
  emit,
}: RunAgentArgs) {
  const abortController = new AbortController();
  const propagate = () => abortController.abort();
  if (signal.aborted) abortController.abort();
  else signal.addEventListener("abort", propagate, { once: true });

  const cwd = path.resolve(workDir);

  const response = query({
    prompt: text,
    options: {
      cwd,
      permissionMode: "default",
      abortController,
      appendSystemPrompt: `You are working in the directory ${cwd}. All file paths you create, edit, or reference must be inside this directory. Do not write files outside of it.`,
      canUseTool: async (toolName, input) => {
        if (FILE_WRITE_TOOLS.has(toolName)) {
          const filePath = typeof input.file_path === "string"
            ? input.file_path
            : undefined;
          if (filePath && !isWithinWorkDir(filePath, cwd)) {
            return {
              behavior: "deny",
              message: `Path '${filePath}' is outside the work directory '${cwd}'.`,
            };
          }
        }
        return { behavior: "allow", updatedInput: input };
      },
    },
  });

  try {
    for await (const message of response) {
      if (signal.aborted) break;
      mapSdkMessage(promptId, message, emit);
    }
  } finally {
    signal.removeEventListener("abort", propagate);
  }
}

function mapSdkMessage(
  promptId: string,
  message: SDKMessage,
  emit: (ev: Event) => void,
) {
  if (message.type === "assistant") {
    for (const block of message.message.content) {
      if (block.type === "text") {
        emit({ type: "text", promptId, chunk: block.text });
      } else if (block.type === "tool_use") {
        emit({
          type: "tool_use",
          promptId,
          name: block.name,
          input: block.input,
        });
      } else if (block.type === "thinking") {
        emit({ type: "thinking", promptId, chunk: block.thinking });
      }
    }
    return;
  }

  if (message.type === "user") {
    const content = message.message.content;
    if (typeof content === "string") return;
    for (const block of content) {
      if (block.type === "tool_result") {
        emit({
          type: "tool_result",
          promptId,
          name: "tool",
          output: truncate(stringifyToolResult(block.content), MAX_TOOL_OUTPUT_BYTES),
          isError: block.is_error ?? false,
        });
      }
    }
    return;
  }

  if (message.type === "result" && message.subtype !== "success") {
    emit({
      type: "error",
      promptId,
      message: `Agent ended: ${message.subtype}`,
    });
  }
}

function stringifyToolResult(content: unknown): string {
  if (typeof content === "string") return content;
  if (Array.isArray(content)) {
    return content
      .map((c) => {
        if (c && typeof c === "object" && "type" in c) {
          const block = c as { type: string; text?: string };
          if (block.type === "text" && typeof block.text === "string") {
            return block.text;
          }
        }
        return JSON.stringify(c);
      })
      .join("\n");
  }
  return JSON.stringify(content);
}
