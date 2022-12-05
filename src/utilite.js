import fs from "node:fs/promises";

export async function isExisting(path) {
  const stat = await fs.stat(path).catch((err) => {
    if (err.code !== "ENOENT") {
      throw err;
    }
  });
  return stat !== undefined;
}

export function errorHandler(err) {
  if (err.code === "ENOENT" || err.code === "EEXIST") {
    throw new Error("FS operation failed");
  }
  throw err;
}
