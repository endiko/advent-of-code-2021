const getInputData = require('./getInputData');
const {getTMatrix} = require('./utils');

const getPowerOfConsumption = (input) => {
  const matrix = getTMatrix(input)
  const createMap = [];
  let gamma = '';
  let epsilon = '';

  matrix.forEach((arr) => {
    const obj = {
      '0': 0,
      '1': 0,
    };

    arr.forEach(el => {
      if (el === '0') {
        obj['0'] += 1;
      } else {
        obj['1'] += 1;
      }
    });

    createMap.push(obj);
  })

  createMap.forEach(obj => {
    if(obj['0'] > obj['1']) {
      gamma += '0';
      epsilon += '1';
    } else {
      gamma += '1';
      epsilon += '0';
    }
  });

  return parseInt(gamma, 2) * parseInt(epsilon, 2);
};

console.log(getPowerOfConsumption(getInputData('test-input.txt')));
console.log(getPowerOfConsumption(getInputData('input.txt')));

