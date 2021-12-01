const fs = require('fs');

module.exports = (path) => (fs
  .readFileSync(path)
  .toString()
  .split('\n')
  .map(str => str.replace(/\r$/, ''))
  .filter(str => str.length > 0)
  .map(item => Number(item)));
