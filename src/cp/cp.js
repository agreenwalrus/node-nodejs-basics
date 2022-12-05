import cp from "child_process";
import path from "path";

const spawnChildProcess = async (args) => {
  const child = cp.fork(path.join(process.cwd(), "./src/cp/files/script.js"), args.slice(2), { stdio: ["pipe", "pipe", "pipe", "ipc"] });
  process.stdin.pipe(child.stdin);

  let isFirstRun = true;
  child.stdout.on("data", (data) => {
    process.stdout.write(data);
    if (!isFirstRun) {
      process.stdout.write("Type in anything: ");
    } else {
      isFirstRun = false;
    }
  });
};

spawnChildProcess(process.argv);
