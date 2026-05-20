import { io, type Socket } from "socket.io-client";
import { NAMESPACE, type Event } from "@ultra-service/shared/events";
import { runAgent } from "./agent.js";

const WS_URL = process.env.WS_URL ?? "ws://localhost:3005";
const WORK_DIR = process.env.WORK_DIR ?? "../../../playground";
if (!process.env.ANTHROPIC_API_KEY) {
  console.warn(
    "[daemon] ANTHROPIC_API_KEY not set — falling back to Claude CLI credentials if available.",
  );
}

const aborts = new Map<string, AbortController>();

const socket: Socket = io(`${WS_URL}${NAMESPACE.DAEMON}`, {
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 10_000,
  randomizationFactor: 0.5,
});

socket.on("connect", () => {
  console.log(`[daemon] connected to ${WS_URL} (cwd: ${WORK_DIR})`);
});

socket.on("disconnect", (reason) => {
  console.log(`[daemon] disconnected: ${reason}`);
});

socket.io.on("reconnect_attempt", (n) => {
  console.log(`[daemon] reconnect attempt ${n}`);
});

socket.io.on("reconnect", (n) => {
  console.log(`[daemon] reconnected after ${n} attempts`);
});

socket.on("event", async (ev: Event) => {
  if (ev.type === "prompt") {
    const controller = new AbortController();
    aborts.set(ev.promptId, controller);
    const emit = (out: Event) => socket.emit("event", out);
    console.log(
      `[daemon] prompt ${ev.promptId.slice(0, 8)}: ${ev.text.slice(0, 80)}`,
    );

    try {
      await runAgent({
        promptId: ev.promptId,
        text: ev.text,
        workDir: WORK_DIR,
        signal: controller.signal,
        emit,
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.error(`[daemon] error on ${ev.promptId.slice(0, 8)}:`, message);
      emit({ type: "error", promptId: ev.promptId, message });
    } finally {
      emit({ type: "done", promptId: ev.promptId });
      aborts.delete(ev.promptId);
    }
    return;
  }

  if (ev.type === "abort") {
    const controller = aborts.get(ev.promptId);
    if (controller) {
      console.log(`[daemon] aborting ${ev.promptId.slice(0, 8)}`);
      controller.abort();
    }
  }
});

process.on("SIGINT", () => {
  console.log("\n[daemon] shutting down…");
  for (const controller of aborts.values()) controller.abort();
  socket.close();
  process.exit(0);
});
