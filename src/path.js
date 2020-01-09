const path = require("path");

console.log(`filename: ${path.basename(__filename)}`);
console.log(`file ext: ${path.extname(__filename)}`);
console.log(`file dirname: ${path.dirname(__filename)}`);

console.log(`parse: `, path.parse(__filename));

console.log(`dirname: ${path.basename(__dirname)}`);

console.log(path.join(__dirname, "server", "index.js"));
