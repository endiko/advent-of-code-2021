import { getInputData, getScoreUnused, getSetOfBoards } from './utils/index.js';

const markNumbers = (board, num) => {
  let status = 'not win';

  for(let i = 0; i < board.length; i++) {
    const row = board[i];
    const idx = row.indexOf(num);

    if (idx !== -1) {
      row[idx] = 'X';
    }

    const count = row.filter(el => el === 'X').length;
    if (count === row.length) {
      status = 'Win!';
      return {
        result: [...board],
        status,
      }
    }
  }

  return {
    result: [...board],
    status,
  };
};

const playBingo = (input) => {
  const nums = input[0].split(',');
  const setOfBoards = getSetOfBoards(input);

  for(let i = 0; i < nums.length; i++) {
    for(let b = 0; b < setOfBoards.length; b++) {
      const {status, result } = markNumbers(setOfBoards[b], nums[i]);
      if (status === 'Win!') {
        return getScoreUnused(result) * Number(nums[i])
      }
    }
  }
};

console.log(playBingo(getInputData('test-input.txt')));
console.log(playBingo(getInputData('input.txt')));
