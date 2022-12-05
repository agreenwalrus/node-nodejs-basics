import fs from "node:fs/promises";
import path from "path";
import { errorHandler, isExisting } from "../utilite.js";

const rename = async () => {
  try {
    const currName = path.resolve(process.cwd(), "./src/fs/files/wrongFilename.txt");
    const newName = path.resolve(process.cwd(), "./src/fs/files/properFilename.md");
    if (isExisting(newName)) throw new Error("FS operation failed");
    await fs.rename(currName, newName);
  } catch (err) {
    errorHandler(err);
  }
};

await rename();
