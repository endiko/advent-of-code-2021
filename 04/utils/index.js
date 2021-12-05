import fs from 'fs';

export const getInputData = (path) => (fs
  .readFileSync(path)
  .toString()
  .split('\n'));

export const getScoreUnused = (board) => (
  board.reduce((prev, curr) => (prev + curr.reduce((pr, c) => ((c !== 'X') ? pr + Number(c) : pr), 0)), 0)
);

export const getSetOfBoards = (input) => {
  const setOfBoards = [];
  let board = [];

  for(let i = 1; i < input.length; i++) {
    if (input[i].length > 0) {
      const temp = input[i].split(' ').filter(el => el.length > 0);
      board.push(temp);
    } else {
      if (board.length > 0) {
        setOfBoards.push(board);
        board = [];
      }
    }
  }

  return setOfBoards;
};
