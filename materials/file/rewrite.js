const fs = require('fs');
const path = require('path');

const file = 'test/test02.txt';

fs.readFile(path.join(__dirname, file), (err, data) => {
  if (err) {
    console.log(err);
  }

  console.log(data.toString()); // buffer выведет в нормальном виде

  if (!fs.existsSync(path.join(__dirname, 'delete'))) {
    fs.mkdirSync(path.join(__dirname, 'delete'));
  }

  fs.writeFile(path.join(__dirname, 'delete', 'delete.txt'), data.toString() + ' mine text', e => {

  });
});
