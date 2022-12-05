import fs from "node:fs/promises";
import path from "path";
import { errorHandler } from "../utilite.js";

const read = async () => {
  try {
    const pathFile = path.resolve(process.cwd(), "./src/fs/files/fileToRead.txt");
    console.log(await fs.readFile(pathFile, { encoding: "utf8" }));
  } catch (err) {
    errorHandler(err);
  }
};

await read();
