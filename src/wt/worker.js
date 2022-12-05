import wt from "worker_threads";

// n should be received from main thread
const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

const sendResult = () => {
  if (Math.random() > 0.6) throw new Error();
  wt.parentPort.postMessage(nthFibonacci(wt.workerData.elementNumber));
};

sendResult();
