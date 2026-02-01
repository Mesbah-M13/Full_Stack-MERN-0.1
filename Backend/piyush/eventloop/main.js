const fs = require("fs");
console.log(1);
console.log(fs.readFileSync("test.txt", "utf-8"));
console.log(2);

// checking how many cores my system has
console.log(3);

fs.readFile("./test.txt", "utf-8", (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});
console.log(4);

// const os = require("os");

// console.log(os.cpus().length);
