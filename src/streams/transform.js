import stream from "stream";

class ReverseStream extends stream.Transform {
  _transform(data, encoding, callback) {
    this.push(data.toString().split("").reverse().join(""));
    callback();
  }
}

const transform = async () => {
  let readStream = process.stdin;
  let writeStream = process.stdout;
  let transformStream = new ReverseStream();
  readStream.pipe(transformStream).pipe(writeStream);
};

await transform();
