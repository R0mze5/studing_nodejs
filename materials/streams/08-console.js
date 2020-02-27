const fs = require('fs');

const { Console } = require('console');

const output = fs.createWriteStream('./stdout.log');
const outerror = fs.createWriteStream('./stderror.log');

const console = new Console(output, outerror);

console.log('test message');
console.error('error message');
