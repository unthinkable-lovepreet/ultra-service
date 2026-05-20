"use client";

import { useState, type KeyboardEvent } from "react";
import { MicButton } from "./MicButton";

type Props = {
  onSubmit: (text: string) => void;
  onStop: () => void;
  running: boolean;
  disabled: boolean;
};

export function PromptInput({ onSubmit, onStop, running, disabled }: Props) {
  const [text, setText] = useState("");

  const send = () => {
    if (!text.trim() || running || disabled) return;
    onSubmit(text);
    setText("");
  };

  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const placeholder = disabled
    ? "Daemon offline — start the daemon to chat"
    : "Ask Claude to do something…";

  return (
    <div className="flex items-end gap-2 rounded-xl border border-zinc-300 bg-white p-2 focus-within:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:focus-within:border-zinc-500">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        disabled={disabled || running}
        rows={1}
        className="min-h-[40px] max-h-32 flex-1 resize-none bg-transparent px-2 py-2 text-sm outline-none placeholder:text-zinc-400 disabled:cursor-not-allowed disabled:opacity-50 dark:text-zinc-100 dark:placeholder:text-zinc-500"
      />
      <MicButton
        onTranscript={(t) =>
          setText((prev) => (prev ? `${prev} ${t}` : t))
        }
        disabled={disabled || running}
      />
      {running ? (
        <button
          type="button"
          onClick={onStop}
          className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
        >
          Stop
        </button>
      ) : (
        <button
          type="button"
          onClick={send}
          disabled={disabled || !text.trim()}
          className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          Send
        </button>
      )}
    </div>
  );
}
