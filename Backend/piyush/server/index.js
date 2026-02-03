const http = require("http");
const fs = require("fs");

const PORT = 3000;
const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: New Req Received\n `;
  fs.appendFile("log.txt", log, (err, data) => {
    if (err) console.log(err);
    else res.end("Hello from server, date received");
  });
  // res.end("Hello from Server");
});

myServer.listen(PORT, () => console.log(`Server running at ${PORT}`));
