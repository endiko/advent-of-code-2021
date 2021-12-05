import fs from 'fs';

export const getInputData = (path) => (fs
  .readFileSync(path)
  .toString()
  .split('\n')
  .map(str => str.replace(/\r$/, ''))
  .filter(str => str.length > 0))
  .map((item) => item.split(''));


export const getTMatrix = (input) => input[0].map((col, i) => input.map(row => row[i]));
