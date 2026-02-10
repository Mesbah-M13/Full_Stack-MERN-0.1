const http = require("http");

const server = http.createServer((req, res) => {
  console.log(
    "request has received successfully",
    req.url,
    req.method,
    req.headers,
  );
  process.exit();
});
const PORT = 3000;
server.listen(PORT, () => console.log(`server is running at ${PORT}`));
