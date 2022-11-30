import fs from "node:fs/promises";
import path from "path";
import { isExisting } from "../utilite.js";

const create = async () => {
  const filePath = path.resolve(process.cwd(), "./src/fs/files/fresh.txt");
  const data = "I am fresh and young";

  if (await isExisting(filePath)) {
    throw new Error("FS operation failed");
  }
  await fs.appendFile(filePath, data);
};

await create();
