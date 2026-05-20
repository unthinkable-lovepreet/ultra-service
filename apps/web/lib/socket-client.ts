"use client";

import { io, type Socket } from "socket.io-client";
import { NAMESPACE } from "@ultra-service/shared/events";

let socket: Socket | null = null;

export function getSocket(): Socket {
  if (socket) return socket;
  if (typeof window === "undefined") {
    throw new Error("getSocket() called on the server");
  }
  socket = io(`${window.location.origin}${NAMESPACE.WEB}`, {
    reconnection: true,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 10_000,
    randomizationFactor: 0.5,
  });
  return socket;
}
