import { getInputData } from './getInputData.js';

const getIncreasesNumber = (input) => {
  let count = 0;

  for (let i = 1; i < input.length; i++) {
    if (input[i] > input[i - 1]) {
      count++;
    }
  }

  return count;
}

console.log(getIncreasesNumber(getInputData('test-input.txt')))
console.log(getIncreasesNumber(getInputData('input.txt')))
