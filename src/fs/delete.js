import fs from "node:fs/promises";
import path from "path";
import { isExisting } from "../utilite.js";

const remove = async () => {
  const pathFile = path.resolve(process.cwd(), "./src/fs/files/fileToRemove.txt");

  if (!(await isExisting(pathFile))) {
    throw new Error("FS operation failed");
  }
  await fs.unlink(pathFile);
};

await remove();
