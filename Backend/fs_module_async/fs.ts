import * as fs from "node:fs";

// Async
// Error 1st callbacks - 1st parameter is for error handling
function createAsynFile(pathname: string) {
  fs.writeFile(pathname, "Hello Nodejs from file-1", (err: Error | null) => {
    if (err) {
      console.log("Something wrong while creating file");
      return;
    }
    console.log("File has been created asynchronously");
  });
  console.log("File operation done!");
}

// createAsynFile("./file1.txt");

// 2. add new content to the file using append

function createAsynFile_2(pathname: string) {
  fs.writeFile(pathname, "Hello Nodejs from file-2\n", (err: Error | null) => {
    if (err) {
      console.log("Something wrong while creating file_2");
      return;
    }
    console.log("File_2 has been created asynchronously");
    fs.appendFile(
      pathname,
      "Hello TypeScript from file-2...\n",
      (err: Error | null) => {
        if (err) {
          console.log("Something wrong while appending file_2 ");
          return;
        }
        console.log("File_2 has been appnended asynchronously");
      }
    );
  });

  console.log("File operation done!");
}

createAsynFile_2("./file2.txt");

// *** It can create callbacak hell