import { getInputData } from './getInputData.js';


const getThreeMeasurementsSum = (data, a, b) => {
  let sum = 0;

  for(let i = a; i <= b; i++) {
    sum += data[i];
  }

  return sum;
};

const getSumMeasurementsIncreasedNumber = (input) => {
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    const A = getThreeMeasurementsSum(input, i, i + 2);
    const B = getThreeMeasurementsSum(input, i + 1, i + 3);
    if (A < B) {
      count++;
    }
  }

  return count;
};

console.log(getSumMeasurementsIncreasedNumber(getInputData('test-input.txt')));
console.log(getSumMeasurementsIncreasedNumber(getInputData('input.txt')));
