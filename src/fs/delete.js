import fs from "node:fs/promises";
import path from "path";
import { errorHandler } from "../utilite.js";

const remove = async () => {
  try {
    const pathFile = path.resolve(process.cwd(), "./src/fs/files/fileToRemove.txt");
    await fs.unlink(pathFile);
  } catch (err) {
    errorHandler(err);
  }
};

await remove();
