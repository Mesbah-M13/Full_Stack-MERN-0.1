const fs = require("fs");

// Write File

// fs.writeFileSync("./sync.txt", "Synchronous operation...");

// async operation 🔜 a callback function is must
// fs.writeFile("./read.txt", "Hello Bangladesh", (err) => {
//   if (err) console.log(err);
//   else console.log("file written successfully");
// });

// Read File

const result = fs.readFileSync("./contact.txt", "utf-8");
// console.log(result);

// using async
const asyncResult = fs.readFile("./contact.txt", "utf-8", (err) => {
  if (err) {
    console.log(err);
  } else console.log("File successfully read");
});
