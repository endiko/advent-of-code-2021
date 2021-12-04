const { getInputData, getScoreUnused, getSetOfBoards } = require('./utils');


const isBoardWins = (board) => {
  for(let i = 0; i < board.length; i++) {
    if (board[i].filter(el => el === 'X').length === board[i].length) {
      return true;
    } else {
      let col = 0;
      let countCol = 0;
      while(col < board.length) {
        if (board[col][i] === 'X') {
          countCol++;
        }
        col++;
      }
      if (countCol === board.length) {
        return true;
      }
    }
  }
  return false;
};

const getGiantSquidWinScore = (input) => {
  const nums = input[0].split(',');
  const setOfBoards = getSetOfBoards(input);
  const boardsMap = [];
  let maxSteps = Number.MIN_SAFE_INTEGER;

  setOfBoards.forEach(board => {
    let tempBoard = {
      board: null,
      number: -1,
      steps: -1,
    };

    for (let i = 0; i < nums.length; i++) {
      const res = board.map(row => {
        const idx = row.indexOf(nums[i]);

        if (idx !== -1) {
          row[idx] = 'X';
        }

        return row;
      });

      if (isBoardWins(res)) {
        maxSteps = Math.max(maxSteps, i);
        tempBoard = {
          board: res,
          number: nums[i],
          steps: i,
        };
        break;
      }
    }
    boardsMap.push(tempBoard);
  });

  for ({board, number, steps} of boardsMap) {
    if (steps === maxSteps) {
      return getScoreUnused(board) * Number(number);
    }
  }
}


console.log(getGiantSquidWinScore(getInputData('test-input.txt')));
console.log(getGiantSquidWinScore(getInputData('input.txt')));
