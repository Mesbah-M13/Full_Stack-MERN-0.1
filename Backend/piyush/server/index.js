const http = require("http");

const PORT = 3000;
const myServer = http.createServer((req, res) => {
  console.log("New req rec.");
  res.end("Hello from Server");
});

myServer.listen(PORT, () => console.log(`Server running at ${PORT}`));
