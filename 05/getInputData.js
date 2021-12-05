const fs = require('fs');

module.exports = (path) => (fs
  .readFileSync(path)
  .toString()
  .split('\n')
  .filter(row => row.length > 0))
  .map(line => line.split(' -> '))
  .map(arr => {
    const [a, b] = [...arr];

    return {
      x1: Number(a.split(',')[0]),
      y1: Number(a.split(',')[1]),
      x2: Number(b.split(',')[0]),
      y2: Number(b.split(',')[1]),
    };
  });
