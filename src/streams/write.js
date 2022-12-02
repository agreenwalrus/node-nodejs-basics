import fs from "fs";
import path from "path";

const write = async () => {
  let readStream = process.stdin;
  let writeStream = fs.createWriteStream(path.resolve(process.cwd(), "./src/streams/files/fileToWrite.txt"));
  readStream.pipe(writeStream);
};

await write();
