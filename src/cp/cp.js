import cp from "child_process";
import path from "path";

const spawnChildProcess = async (args) => {
  const child = cp.fork(path.join(process.cwd(), "./src/cp/files/script.js"), args.slice(2), { stdio: [null, "pipe", "pipe", "ipc"] });
  child.stdout.pipe(process.stdout);
  process.stdin.pipe(child.stdin);
};

spawnChildProcess(process.argv);
