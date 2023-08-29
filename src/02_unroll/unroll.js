function unroll(squareArray) {
  const result = [];
  while (squareArray.length) {
    // Traverse the top row from left to right
    result.push(...squareArray.shift());

    // Traverse the rightmost column from top to bottom
    for (const row of squareArray) {
      result.push(row.pop());
    }

    // Traverse the bottom row from right to left, if any rows are left
    if (squareArray.length) {
      result.push(...(squareArray.pop().reverse()));
    }

    // Traverse the leftmost column from bottom to top
    for (let i = squareArray.length - 1; i >= 0; i--) {
      result.push(squareArray[i].shift());
    }
  }
  return result;
}

module.exports = unroll;