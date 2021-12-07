import { getInputData } from './utils/index.js';

const solution = (input) => {
  let i = 1;
  let min = Number.MAX_SAFE_INTEGER;
  while(i < input.length + 1) {
    let total = 0
    input.forEach(el => {
      total += Math.abs(el - i);
    })
    min = Math.min(min, total)
    i++
  }

  return min;
}

console.log(solution(getInputData('test-input.txt')))
console.log(solution(getInputData('input.txt')))


const solution2 = (input) => {
  let i = 0;
  let min = Number.MAX_SAFE_INTEGER;

  while(i < input.length) {
    let total = 0;
    
    input.forEach((el, idx) => {
      const dist = Math.abs(el - i);

      total += (dist * (dist + 1))/2
    })
    min = Math.min(min, total)
    i++
  }

  return min
}

console.log(solution2(getInputData('test-input.txt')))
console.log(solution2(getInputData('input.txt')))
