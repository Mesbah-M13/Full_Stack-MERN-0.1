const fs = require("fs");

fs.writeFileSync("./sync.txt", "Synchronous operation...");

// async operation 🔜 a callback function is must
// fs.writeFile("./read.txt", "Hello Bangladesh", (err) => {
//   if (err) console.log(err);
//   else console.log("file written successfully");
// });
