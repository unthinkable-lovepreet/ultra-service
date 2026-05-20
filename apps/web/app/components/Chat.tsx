"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Socket } from "socket.io-client";
import type { Event } from "@ultra-service/shared/events";
import { getSocket } from "@/lib/socket-client";
import { DaemonStatus } from "./DaemonStatus";
import { EventStream } from "./EventStream";
import { PromptInput } from "./PromptInput";

export default function Chat() {
  const [connected, setConnected] = useState(false);
  const [daemonOnline, setDaemonOnline] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);
  const [activePromptId, setActivePromptId] = useState<string | null>(null);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    const socket = getSocket();
    socketRef.current = socket;

    const onConnect = () => setConnected(true);
    const onDisconnect = () => setConnected(false);
    const onEvent = (ev: Event) => {
      if (ev.type === "status") {
        setDaemonOnline(ev.daemonOnline);
        return;
      }
      setEvents((prev) => [...prev, ev]);
      if (ev.type === "done") {
        setActivePromptId((current) =>
          current === ev.promptId ? null : current,
        );
      }
    };

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("event", onEvent);
    if (socket.connected) setConnected(true);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("event", onEvent);
    };
  }, []);

  const submit = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || !daemonOnline || activePromptId) return;
      const promptId = crypto.randomUUID();
      setActivePromptId(promptId);
      const ev: Event = { type: "prompt", promptId, text: trimmed };
      setEvents((prev) => [...prev, ev]);
      socketRef.current?.emit("event", ev);
    },
    [daemonOnline, activePromptId],
  );

  const stop = useCallback(() => {
    if (!activePromptId) return;
    socketRef.current?.emit("event", {
      type: "abort",
      promptId: activePromptId,
    } satisfies Event);
  }, [activePromptId]);

  return (
    <div className="flex h-screen flex-col bg-zinc-50 dark:bg-zinc-950">
      <header className="flex items-center justify-between border-b border-zinc-200 bg-white px-6 py-3 dark:border-zinc-800 dark:bg-zinc-950">
        <h1 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Ultra Service
        </h1>
        <DaemonStatus connected={connected} daemonOnline={daemonOnline} />
      </header>
      <main className="flex-1 overflow-y-auto px-6 py-6">
        <div className="mx-auto max-w-3xl">
          <EventStream events={events} />
        </div>
      </main>
      <footer className="border-t border-zinc-200 bg-white px-6 py-4 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-3xl">
          <PromptInput
            onSubmit={submit}
            onStop={stop}
            running={activePromptId !== null}
            disabled={!daemonOnline || !connected}
          />
        </div>
      </footer>
    </div>
  );
}
