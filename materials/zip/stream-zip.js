const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const file = path.join(__dirname, './text.txt');

fs.createReadStream(file).pipe(zlib.createGzip()).on('end', () => console.log('end read File')).pipe(fs.createWriteStream(file + '.gz')).on('close', () => console.log('closed'));
