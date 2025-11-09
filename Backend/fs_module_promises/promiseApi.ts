import * as fs from "node:fs/promises";

async function createFile(pathName: string) {
  try {
    await fs.writeFile(pathName, "Hello promise api... \n");
    await fs.appendFile(pathName, "Hello promise api using nodejs...");
  } catch (err) {
    console.log("Error found", err);
  }
  console.log("File written!");
}
createFile("./file1.txt");
