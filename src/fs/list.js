import fs from "node:fs/promises";
import path from "path";
import { errorHandler } from "../utilite.js";

const list = async () => {
  try {
    const sourceFolder = path.resolve(process.cwd(), "./src/fs/files");
    const files = await fs.readdir(sourceFolder);
    files.forEach((file) => {
      console.log(file);
    });
  } catch (err) {
    errorHandler(err);
  }
};

await list();
