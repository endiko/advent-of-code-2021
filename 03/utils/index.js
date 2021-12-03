// const getTMatrix = () => (input[0].map((col, i) => input.map(row => row[i])));

module.exports = {
  getTMatrix: (input) => input[0].map((col, i) => input.map(row => row[i])),
}
