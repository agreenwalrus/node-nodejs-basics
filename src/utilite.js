import fs from "node:fs/promises";

export async function isExisting(path) {
  const stat = await fs.stat(path).catch((err) => {
    if (err.code !== "ENOENT") {
      throw err;
    }
  });
  return stat !== undefined
}