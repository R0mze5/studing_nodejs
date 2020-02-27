const path = require('path');

console.log(`filename: ${path.basename(__filename)}`);
console.log(`file ext: ${path.extname(__filename)}`);
console.log(`file dirname: ${path.dirname(__filename)}`);

console.log('parse: ', path.parse(__filename));

console.log(`dirname: ${path.basename(__dirname)}`);

console.log(path.join(__dirname, 'server', 'index.js'));

console.log(path.relative('/data/as/ads', '/data/br/as'));
console.log(path.resolve('/data/as', './baz'));
console.log(path.normalize('/data//as/ads/..'));
console.log(path.parse('/data/as/ads/a.txt'));
console.log(path.sep);
