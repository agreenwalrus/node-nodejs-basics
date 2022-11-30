import fs from "node:fs/promises";
import path from "path";
import { isExisting } from "../utilite.js";

const list = async () => {
  const sourceFolder = path.resolve(process.cwd(), "./src/fs/files");
  if (!(await isExisting(sourceFolder))) {
    throw new Error("FS operation failed");
  }
  const files = await fs.readdir(sourceFolder);
  files.forEach((file) => {
    console.log(file);
  });
};

await list();
