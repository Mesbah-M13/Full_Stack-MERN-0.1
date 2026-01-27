const fs = require("fs");

function exploreFileStats(filePath) {
  try {
    const stats = fs.statSync(filePath);

    // Print all available properties
    console.log("📊 File Statistics:");
    console.log("-------------------");

    // Size information
    console.log(`📏 Size: ${stats.size} bytes`);

    // Time information
    console.log(`📅 Created: ${stats.birthtime}`);
    console.log(`🕒 Last Modified: ${stats.mtime}`);
    console.log(`👀 Last Accessed: ${stats.atime}`);
    console.log(`📝 Status Changed: ${stats.ctime}`);

    // File type checks
    console.log(`\n📌 File Type Information:`);
    console.log(`📂 Is Directory? ${stats.isDirectory()}`);
    console.log(`📄 Is File? ${stats.isFile()}`);
    console.log(`🔗 Is Symbolic Link? ${stats.isSymbolicLink()}`);

    // File mode and permissions
    console.log(`\n🔐 File Mode: ${stats.mode}`);

    // File identifiers
    console.log(`🆔 Device ID: ${stats.dev}`);
    console.log(`📑 Inode number: ${stats.ino}`);
  } catch (error) {
    console.error("❌ Error reading file:", error.message);
  }
}

// Usage
exploreFileStats("./my-file.txt");
