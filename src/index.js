
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let sum = [];
  if (matrix == null) {
    return sum;
  }
  
  for (let key of matrix) {
    if (matrix.indexOf(key) % 2 != 0) {
      key.reverse()
    }
  }

  for (let i = 0; i < matrix.length; i++ ){
    for (let n = 0; n < matrix[i].length; n++) {
      sum.push(matrix[i][n]);
    }
  }
  return sum;
}
