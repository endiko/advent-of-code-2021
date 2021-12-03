const getInputData = require('./getInputData');
const {getTMatrix} = require('./utils');


const createMap = (arr) => {
  const map = {
    '0': [],
    '1': [],
  };
  // let count1 = 0;
  // let count0 = 0;
  arr.forEach((val, idx) => {
    if (val === '1') {
      map['1'].push(idx);
      // count1++;
    } else {
      map['0'].push(idx);
      // count0++;
    }
  });

  return map;
}

const findOxygenGeneratorRating = (matrix) => {
  let matrixCopy = [...matrix];

  let i = 0;

  while(i < matrix.length && matrixCopy.length > 0) {
    const valueMap = createMap(matrixCopy[i]);
    const count1 = valueMap['1'].length;
    const count0 = valueMap['0'].length;
    const filtered = matrixCopy.map((arr) => (arr.filter((el, idx) => (valueMap[(count1 >= count0) ? '1' : '0'].includes(idx)))));
    matrixCopy = [...filtered];
    i++;
  }

  return parseInt(matrixCopy.join(''), 2);
}

const findCO2ScrubberRating = (matrix) => {
  let matrixCopy = [...matrix];

  let i = 0;

  while(i < matrix.length && matrixCopy[0].length > 1) {
    const valueMap = createMap(matrixCopy[i]);
    const count1 = valueMap['1'].length;
    const count0 = valueMap['0'].length;
    const filtered = matrixCopy.map((arr) => (arr.filter((el, idx) => (valueMap[ (count1 >= count0) ? '0' : '1'].includes(idx)))));
    matrixCopy = [...filtered];
    i++;
  }

  return parseInt(matrixCopy.join(''), 2);
}

const getLifeSupportRatingOfTheSubmarine = (input) => {
  const matrix = getTMatrix(input);

  return findOxygenGeneratorRating(matrix) * findCO2ScrubberRating(matrix);
};

console.log(getLifeSupportRatingOfTheSubmarine(getInputData('test-input.txt')));
console.log(getLifeSupportRatingOfTheSubmarine(getInputData('input.txt')));

