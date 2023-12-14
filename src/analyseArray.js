function analyseArray(array) {
  const sum = array.reduce((accumulator, current) => accumulator + current);
  array.average = sum / array.length;
  array.min = Math.min(...array);
  array.max = Math.max(...array);
  array.length = array.length;
  return array;
}

module.exports = analyseArray;
