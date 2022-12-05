import fs from "fs";
import path from "path";

const read = async () => {
  let readStream = fs.createReadStream(path.resolve(process.cwd(), "./src/streams/files/fileToRead.txt"));
  let writeStream = process.stdout;
  readStream.pipe(writeStream);
};

await read();
