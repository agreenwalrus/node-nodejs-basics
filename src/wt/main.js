import wt from "worker_threads";
import os from "os";
import path from "path";

const performCalculations = async () => {
  const START_FIB = 10;
  const coreNumber = os.cpus().length;
  const promises = [];

  for (let i = 0; i < coreNumber; i++) {
    promises.push(
      new Promise((res, rej) => {
        const worker = new wt.Worker(path.resolve(process.cwd(), "./src/wt/worker.js"), {
          workerData: {
            elementNumber: START_FIB + i,
          },
        });
        worker.on("message", (data) => {
          res(data);
        });
        worker.on("error", (err) => {
          rej(err);
        });
      })
    );
  }
  (await Promise.allSettled(promises)).forEach((e) => {
    let status, val;
    if (e.status === "fulfilled") {
      status = "resolved";
      val = e.value;
    } else {
      status = "error";
      val = null;
    }
    console.log(`${status}: ${val}`);
  });
};

await performCalculations();
