import wt from "worker_threads";

// n should be received from main thread
const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

const sendResult = () => {
  const elementNumber = wt.workerData.elementNumber;
  wt.parentPort.postMessage({ elementNumber: elementNumber, value: nthFibonacci(elementNumber) });
};

sendResult();
