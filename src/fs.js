const fs = require("fs");
const path = require("path");

// fs.mkdir(path.join(__dirname, "test"), err => {
//   if (err) {
//     throw err;
//   }
//   console.log("folder created");
// }); // асихронный метод, в отлиции от mkdirSync

const filepath = path.join(__dirname, "test", "text.txt");
fs.writeFile(filepath, "file created", err => {
  // создать файт с перетиранием контента
  if (err) {
    throw err;
  }
  // console.log("file created");
});

fs.appendFile(filepath, "\nfile updated", err => {
  // создать файт с перетиранием контента
  if (err) {
    throw err;
  }
  // console.log("file updated");
});

// fs.readFile(filepath, (err, content) => {
//   // создать файт с перетиранием контента
//   if (err) {
//     throw err;
//   }

//   console.log(content); // Hex
//   const data = Buffer.from(content);
//   console.log(data.toString());
// });

fs.readFile(filepath, "utf-8", (err, content) => {
  // создать файт с перетиранием контента
  if (err) {
    throw err;
  }

  console.log(content); // utf-8
});
