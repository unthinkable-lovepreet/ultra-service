import { createServer } from "node:http";
import next from "next";
import { Server as IOServer } from "socket.io";
import { setupSocketServer } from "./lib/socket-server.js";

const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOST ?? "0.0.0.0";
const port = Number(process.env.PORT ?? 3005);

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

async function main() {
  await app.prepare();

  const httpServer = createServer((req, res) => handle(req, res));

  const io = new IOServer(httpServer, {
    pingInterval: 20_000,
    pingTimeout: 25_000,
    cors: { origin: "*" },
  });

  setupSocketServer(io);

  httpServer.listen(port, hostname, () => {
    console.log(
      `> Server ready on http://${hostname}:${port} (${dev ? "dev" : "prod"})`,
    );
  });
}

main().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
