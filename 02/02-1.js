import { getInputData } from './getInputData.js';

const getMultiplyHorizontalPositionAndDepth = (input) => {
  let depth = 0;
  let hor = 0;

  for(let i = 0; i < input.length; i++) {
    const direction = input[i][0];
    const value = Number(input[i][1]);

    if (direction === 'forward') {
      hor += value;
    } else if (direction === 'down') {
      depth += value;
    } else if (direction === 'up') {
      depth -= value;
    }
  }

  return hor * depth;
}

console.log(getMultiplyHorizontalPositionAndDepth(getInputData('test-input.txt')));
console.log(getMultiplyHorizontalPositionAndDepth(getInputData('input.txt')));

