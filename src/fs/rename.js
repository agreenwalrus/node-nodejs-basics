import fs from "node:fs/promises";
import path from "path";
import { isExisting } from "../utilite.js";

const rename = async () => {
  const currName = path.resolve(process.cwd(), "./src/fs/files/wrongFilename.txt");
  const newName = path.resolve(process.cwd(), "./src/fs/files/properFilename.md");
  const [isExistingCurr, isExistingNew] = await Promise.all([isExisting(currName), isExisting(newName)]);
  if (!isExistingCurr || isExistingNew) {
    throw new Error("FS operation failed");
  }
  await fs.rename(currName, newName);
};

await rename();
