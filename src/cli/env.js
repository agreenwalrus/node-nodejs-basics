const parseEnv = () => {
  const res = Object.entries(process.env)
    .filter(([key, _]) => key.startsWith("RSS_"))
    .map(([key, val]) => `${key}=${val}`);

  console.log(res.join("; "));
};

parseEnv();
