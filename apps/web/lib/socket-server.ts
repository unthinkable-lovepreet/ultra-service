import type { Namespace, Server as IOServer, Socket } from "socket.io";
import { NAMESPACE, type Event } from "@ultra-service/shared/events";

let daemonSocket: Socket | null = null;

export function setupSocketServer(io: IOServer) {
  const webNs = io.of(NAMESPACE.WEB);
  const daemonNs = io.of(NAMESPACE.DAEMON);

  daemonNs.on("connection", (socket) => {
    if (daemonSocket) {
      console.warn("[daemon] rejecting extra connection:", socket.id);
      socket.disconnect(true);
      return;
    }
    daemonSocket = socket;
    console.log("[daemon] connected:", socket.id);
    broadcastStatus(webNs, true);

    socket.on("event", (ev: Event) => {
      webNs.emit("event", ev);
    });

    socket.on("disconnect", (reason) => {
      if (daemonSocket?.id === socket.id) {
        daemonSocket = null;
        broadcastStatus(webNs, false);
      }
      console.log("[daemon] disconnected:", reason);
    });
  });

  webNs.on("connection", (socket) => {
    console.log("[web] connected:", socket.id);
    socket.emit("event", {
      type: "status",
      daemonOnline: daemonSocket !== null,
    } satisfies Event);

    socket.on("event", (ev: Event) => {
      if (ev.type !== "prompt" && ev.type !== "abort") return;
      if (!daemonSocket) {
        socket.emit("event", {
          type: "error",
          promptId: ev.promptId,
          message: "Daemon offline — start the daemon on your laptop.",
        } satisfies Event);
        socket.emit("event", {
          type: "done",
          promptId: ev.promptId,
        } satisfies Event);
        return;
      }
      daemonSocket.emit("event", ev);
    });

    socket.on("disconnect", () => {
      console.log("[web] disconnected:", socket.id);
    });
  });
}

function broadcastStatus(webNs: Namespace, online: boolean) {
  webNs.emit("event", {
    type: "status",
    daemonOnline: online,
  } satisfies Event);
}
