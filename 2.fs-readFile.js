const fs = require("node:fs");
const { promisify } = require("node:util");

const readFilePromise = promisify(fs.readFile);

console.log("Leyendo el primer archivo...");
fs.readFile("./archivo.txt", "utf-8").then((text) => {
  console.log("Primer texto", text);
});

console.log("Leyendo el segundo archivo...");
fs.readFile("./archivo2.txt", "utf-8", (err, text) => {
  console.log(text);
});
