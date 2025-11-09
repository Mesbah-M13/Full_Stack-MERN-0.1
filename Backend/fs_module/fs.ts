// 1. File Creation

import * as fs from "node:fs";

function createFile(pathName: string) {
  fs.writeFileSync(pathName, "Hello Nodejs..!");
  console.log("File has been added");
}

// createFile("./file.txt");

// 2. if we add 2 sync command to create file it will override and earse the 1st one/ones and only create the latest file
function createAnotherFile(pathName: string) {
  fs.writeFileSync(pathName, "Hello Nodejs_01 ..!");
  fs.writeFileSync(pathName, "Hello JavaScript ..!");
  console.log("New file has been added");
}
// createAnotherFile("./file2.txt");

// 3. to add something in the file use appendFile
function createFile_3(pathName: string) {
  fs.writeFileSync(pathName, "Hello Nodejs_01 ..! \n");
  fs.appendFileSync(pathName, "Hello JavaScript & Typescript ..!");
  console.log("File-->3 has been added");
}
createFile_3("./file3.txt");
