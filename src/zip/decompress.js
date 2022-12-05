import fs from "fs";
import fsPromises from "node:fs/promises";
import path from "path";
import zlib from "zlib";

const decompress = async () => {
  const destFile = path.resolve(process.cwd(), "./src/zip/files/fileToCompress.txt");
  await fsPromises.appendFile(destFile, "");
  const readStream = fs.createReadStream(path.resolve(process.cwd(), "./src/zip/files/archive.gz"));
  const writeStream = fs.createWriteStream(destFile);
  const gunzipStream = zlib.createGunzip();
  readStream.pipe(gunzipStream).pipe(writeStream);
};

await decompress();
