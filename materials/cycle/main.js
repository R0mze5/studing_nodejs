// цикличность - то, чего стоит избегать в node

// если модуль загрузился, то он берется из кэша

const a = require('./a');
const b = require('./b');

console.log(a);
console.log(b);
