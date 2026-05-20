"use client";

import { useEffect, useRef, type ReactNode } from "react";
import type { Event } from "@ultra-service/shared/events";

export function EventStream({ events }: { events: Event[] }) {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [events.length]);

  if (events.length === 0) {
    return (
      <p className="py-16 text-center text-sm text-zinc-500 dark:text-zinc-400">
        Type a prompt below to start.
      </p>
    );
  }

  return (
    <div className="space-y-3 text-sm leading-relaxed">
      {renderEvents(events)}
      <div ref={endRef} />
    </div>
  );
}

function renderEvents(events: Event[]): ReactNode[] {
  const out: ReactNode[] = [];
  let buffer: {
    promptId: string;
    type: "text" | "thinking";
    chunks: string[];
  } | null = null;

  const flush = () => {
    if (!buffer) return;
    const { promptId, type, chunks } = buffer;
    out.push(
      <p
        key={`${promptId}-${out.length}-${type}`}
        className={
          type === "thinking"
            ? "italic text-zinc-500 dark:text-zinc-400"
            : "whitespace-pre-wrap text-zinc-900 dark:text-zinc-100"
        }
      >
        {chunks.join("")}
      </p>,
    );
    buffer = null;
  };

  for (const ev of events) {
    if (ev.type === "text" || ev.type === "thinking") {
      if (
        buffer &&
        buffer.promptId === ev.promptId &&
        buffer.type === ev.type
      ) {
        buffer.chunks.push(ev.chunk);
      } else {
        flush();
        buffer = { promptId: ev.promptId, type: ev.type, chunks: [ev.chunk] };
      }
      continue;
    }
    flush();
    out.push(renderEvent(ev, out.length));
  }
  flush();

  return out;
}

function renderEvent(ev: Event, key: number): ReactNode {
  switch (ev.type) {
    case "prompt":
      return (
        <div
          key={key}
          className="rounded-xl bg-zinc-900 px-4 py-3 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900"
        >
          <div className="mb-1 text-xs uppercase tracking-wider opacity-60">
            You
          </div>
          <p className="whitespace-pre-wrap text-sm">{ev.text}</p>
        </div>
      );
    case "tool_use":
      return (
        <div
          key={key}
          className="rounded-lg border border-zinc-200 bg-white px-3 py-2 font-mono text-xs dark:border-zinc-800 dark:bg-zinc-900"
        >
          <span className="text-zinc-500 dark:text-zinc-400">→ </span>
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">
            {ev.name}
          </span>
          <span className="ml-2 text-zinc-500 dark:text-zinc-400">
            {previewInput(ev.input)}
          </span>
        </div>
      );
    case "tool_result":
      return (
        <div
          key={key}
          className={`rounded-lg border px-3 py-2 font-mono text-xs ${
            ev.isError
              ? "border-red-200 bg-red-50 text-red-900 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-200"
              : "border-zinc-200 bg-zinc-50 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-300"
          }`}
        >
          <pre className="whitespace-pre-wrap break-words">{ev.output}</pre>
        </div>
      );
    case "error":
      return (
        <p
          key={key}
          className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700 dark:bg-red-950/40 dark:text-red-300"
        >
          ✗ {ev.message}
        </p>
      );
    case "done":
      return (
        <p
          key={key}
          className="text-xs text-zinc-400 dark:text-zinc-600"
        >
          ✓ done
        </p>
      );
    default:
      return null;
  }
}

function previewInput(input: unknown): string {
  try {
    const s = typeof input === "string" ? input : JSON.stringify(input);
    return s.length > 120 ? `${s.slice(0, 120)}…` : s;
  } catch {
    return "";
  }
}
