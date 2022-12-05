import fs from "node:fs/promises";
import path from "path";
import { errorHandler } from "../utilite.js";

const create = async () => {
  try {
    const filePath = path.resolve(process.cwd(), "./src/fs/files/fresh.txt");
    const data = "I am fresh and young";
    await fs.writeFile(filePath, data, { flag: "wx" });
  } catch (err) {
    errorHandler(err);
  }
};

await create();
