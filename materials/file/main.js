const fs = require('fs');
const path = require('path');

const base = './test';

const readDir = (base, level) => {
  const files = fs.readdirSync(base);

  files.forEach(item => {
    const localBase = path.join(base, item);

    const state = fs.statSync(localBase);

    if (state.isDirectory()) {
      console.log(' '.repeat(level) + 'DIR: ' + item);

      readDir(localBase, level + 1);
    } else {
      console.log(' '.repeat(level) + 'File: ' + item);
    }
  });
};

readDir(path.join(__dirname, base), 2);
