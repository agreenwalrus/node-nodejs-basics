import fs from "fs";
import fsPromises from "node:fs/promises";
import path from "path";
import zlib from "zlib";

const compress = async () => {
  const destFile = path.resolve(process.cwd(), "./src/zip/files/archive.gz");
  await fsPromises.appendFile(destFile, "");
  const readStream = fs.createReadStream(path.resolve(process.cwd(), "./src/zip/files/fileToCompress.txt"));
  const writeStream = fs.createWriteStream(destFile);
  const gzipStream = zlib.createGzip();
  readStream.pipe(gzipStream).pipe(writeStream);
};

await compress();
