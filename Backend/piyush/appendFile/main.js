const fs = require("fs");

fs.appendFileSync("newFile.txt", `${new Date().toString()}\n`);

fs.copyFileSync("./newFile.txt", "./copyFile.txt");
console.log("Date appended & copied successfully");

fs.unlinkSync("./copyFile.txt");
console.log("data deleted ....");
