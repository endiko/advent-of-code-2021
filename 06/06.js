import {getInputData} from './utils/index.js'


const solution = (input, part = 'part 1') => {
  let arr = Array(9).fill(0);

  const DAYS = part === 'part 2' ? 256 : 80;

  input.forEach(el => {
    arr[el]++;
  });

  for(let d = 0; d < DAYS; d++) {
    let birth = arr.shift();
    arr[6] += birth;
    arr.push(birth);
  }

  return arr.reduce((sum, x) => sum + x);
}

console.log(solution(getInputData('test-input.txt')));
console.log(solution(getInputData('input.txt')));

console.log(solution(getInputData('test-input.txt'), 'part 2'));
console.log(solution(getInputData('input.txt'), 'part 2'));
