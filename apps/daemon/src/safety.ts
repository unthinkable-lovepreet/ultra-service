import path from "node:path";

export function truncate(s: string, maxBytes: number): string {
  if (Buffer.byteLength(s, "utf-8") <= maxBytes) return s;
  const slice = Buffer.from(s, "utf-8").subarray(0, maxBytes).toString("utf-8");
  return `${slice}\n…[truncated]…`;
}

export function isWithinWorkDir(filePath: string, workDir: string): boolean {
  const dir = path.resolve(workDir);
  const target = path.isAbsolute(filePath)
    ? path.resolve(filePath)
    : path.resolve(dir, filePath);
  return target === dir || target.startsWith(dir + path.sep);
}
