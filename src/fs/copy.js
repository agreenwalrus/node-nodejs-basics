import fs from "node:fs/promises";
import path from "path";
import { isExisting } from "../utilite.js";

const copy = async () => {
  const sourceFolder = path.resolve(process.cwd(), "./src/fs/files");
  const destinationFolder = path.resolve(process.cwd(), "./src/fs/files_copy");
  const [isExistingSrc, isExistingDest] = await Promise.all([isExisting(sourceFolder), isExisting(destinationFolder)]);
  if (!isExistingSrc || isExistingDest) {
    throw new Error("FS operation failed");
  }
  await fs.mkdir(destinationFolder);
  const files = await fs.readdir(sourceFolder);
  const copyFilePromices = [];
  files.forEach((file) => {
    copyFilePromices.push(fs.copyFile(path.resolve(sourceFolder, file), path.resolve(destinationFolder, file)));
  });
  await Promise.all(copyFilePromices);
};

copy();
