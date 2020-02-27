// здесь написана дичь специально

exports.loaded = false;

const b = require('./b');

module.exports = {
  bWasLoaded: b.loaded,
  loaded: true
};
