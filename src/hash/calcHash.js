import fs from "node:fs/promises";
import path from "path";
const { createHash } = await import("node:crypto");

const calculateHash = async () => {
  const pathFile = path.resolve(process.cwd(), "./src/hash/files/fileToCalculateHashFor.txt");
  const data = await fs.readFile(pathFile, { encoding: "utf8" });
  console.log(createHash("sha256").update(data).digest("hex"));
};

await calculateHash();
