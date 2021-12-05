const getInputData = require('./getInputData');
const SIZE = 1000;

const solution = (input, part = 'part 1') => {
  const fillHorizontals = (map, {x1, y1, x2, y2}) => {
    const start = (x1 < x2) ? x1 : x2;
    const end = (x1 < x2) ? x2 : x1;
    for(let i = start; i <= end; i++) {
      if (map[i][y1] === 0) {
        map[i][y1] = 1;
      } else {
        map[i][y1] += 1;
      }
    }
  };
  
  const fillVerticals = (map, {x1, y1, x2, y2}) => {
    const start = (y1 < y2) ? y1 : y2;
    const end = (y1 < y2) ? y2 : y1;
    for(let i = start; i <= end; i++) {
      if (map[x1][i] === 0) {
        map[x1][i] = 1;
      } else {
        map[x1][i] += 1;
      }
    }
  };
  
  const fillDiagonals = (map, {x1, y1, x2, y2}) => {
    let dx = (x1 > x2) ? -1 : 1;
    let dy = (y1 > y2) ? -1 : 1;
    let i = x1;
    let j = y1;
    while(i !== x2) {
      while(j !== y2) {
        map[i][j] += 1;
        i += dx;
        j += dy;
      }
    }
    map[x2][y2] += 1;
  };

  const map = Array(SIZE).fill(0).map(el => Array(SIZE).fill(0));

  input.forEach(coords => {
    const {x1, y1, x2, y2} = coords;
    if (part === 'part 2') {
      if (x1 === x2) {
        fillVerticals(map, coords);
      } else if (y1 === y2) {
        fillHorizontals(map, coords);
      } else {
        fillDiagonals(map, coords);
      }
    } else {
      if (x1 === x2) {
        fillVerticals(map, coords);
      } else if (y1 === y2) {
        fillHorizontals(map, coords);
      }
    }
  });

  return map.reduce((prev, curr) => (prev + curr.filter(el => el > 1).length), 0);
}

// console.log(solution(getInputData('test-input.txt')));
console.log(solution(getInputData('input.txt')));
// console.log(solution(getInputData('test-input.txt'), 'part 2'));
console.log(solution(getInputData('input.txt'), 'part 2'));
