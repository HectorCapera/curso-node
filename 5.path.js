const path = require("node:path");

// unir rutas con path.join

// barra separadora de carpetas según el sistema operativo
console.log(path.sep);

// unir rutas con path.join
const filePath = path.join("content", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename("content/subfolder/test.txt");
console.log(base);

const filename = path.basename("content/subfolder/password.txt", ".txt");
console.log(filename);

const extension = path.extname("image.png");
console.log(extension);
