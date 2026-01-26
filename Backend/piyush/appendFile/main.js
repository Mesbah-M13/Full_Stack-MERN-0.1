const fs = require("fs");

fs.appendFileSync("newFile.txt", `${new Date().toString()}\n`);
console.log("Date appended successfully");
