import fs from "node:fs/promises";
import path from "path";
import { isExisting } from "../utilite.js";

const read = async () => {
  const pathFile = path.resolve(process.cwd(), "./src/fs/files/fileToRead.txt");

  if (!(await isExisting(pathFile))) {
    throw new Error("FS operation failed");
  }
  console.log(await fs.readFile(pathFile, { encoding: "utf8" }));
};

await read();
