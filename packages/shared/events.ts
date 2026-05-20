export const NAMESPACE = {
  WEB: "/web",
  DAEMON: "/daemon",
} as const;

export const MAX_TOOL_OUTPUT_BYTES = 5_000;

export type Event =
  | { type: "prompt"; promptId: string; text: string }
  | { type: "abort"; promptId: string }
  | { type: "thinking"; promptId: string; chunk: string }
  | { type: "text"; promptId: string; chunk: string }
  | { type: "tool_use"; promptId: string; name: string; input: unknown }
  | {
      type: "tool_result";
      promptId: string;
      name: string;
      output: string;
      isError?: boolean;
    }
  | { type: "done"; promptId: string }
  | { type: "error"; promptId: string; message: string }
  | { type: "status"; daemonOnline: boolean };
