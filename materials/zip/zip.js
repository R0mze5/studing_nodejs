const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const file = path.join(__dirname, './text.txt');

fs.readFile(file, (err, buffer) => {
  zlib.gzip(buffer, (err, buffer) => {
    fs.writeFile(file + '.gz', buffer, err => {
      console.log('compressed!');
    });
  });
});
