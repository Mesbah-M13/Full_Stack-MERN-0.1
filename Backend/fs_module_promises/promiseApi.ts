import * as fs from "node:fs/promises";

async function createFile(pathName: string) {
  await fs.writeFile(pathName, "Hello promise api \n");
  await fs.appendFile(pathName, "Hello promise api using nodejs");
  console.log("File written!");
}
createFile("./file1.txt");
