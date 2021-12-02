const getInputData = require('./getInputData');
const fs = require('fs');

const getMultiplyHorizontalPositionAndDepthWithAim = (input) => {
  let depth = 0;
  let hor = 0;
  let aim = 0;

  for(let i = 0; i < input.length; i++) {
    const direction = input[i][0];
    const value = Number(input[i][1]);
  
    if (direction === 'forward') {
      const x = value;
      hor += x;
      depth += (aim * x);
    } else if (direction === 'down') {
      aim += value;
    } else if (direction === 'up') {
      aim -= value;
    }
  }

  return hor * depth;
}

console.log(getMultiplyHorizontalPositionAndDepthWithAim(getInputData('test-input.txt')));
console.log(getMultiplyHorizontalPositionAndDepthWithAim(getInputData('input.txt')));

