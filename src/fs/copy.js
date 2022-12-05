import fs from "node:fs/promises";
import path from "path";
import { errorHandler, isExisting } from "../utilite.js";

const copyDirectoryDeep = async (srcPath, destPath) => {
  const files = await fs.readdir(srcPath, { withFileTypes: true });

  await fs.mkdir(destPath);

  return Promise.all(
    files.map(async (file) => {
      const srcFilePath = path.resolve(srcPath, file.name);
      const destFilePath = path.resolve(destPath, file.name);

      if (file.isDirectory()) {
        await copyDirectoryDeep(srcFilePath, destFilePath);
      } else {
        await fs.copyFile(srcFilePath, destFilePath);
      }
    })
  );
};

const copy = async () => {
  try {
    const sourceFolder = path.resolve(process.cwd(), "./src/fs/files");
    const destinationFolder = path.resolve(process.cwd(), "./src/fs/files_copy");
    await copyDirectoryDeep(sourceFolder, destinationFolder);
  } catch (err) {
    errorHandler(err);
  }
};

copy();
