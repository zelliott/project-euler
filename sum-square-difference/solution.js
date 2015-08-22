function sumSquareDifference(max) {
  var sumOfSequence = (max * (max + 1)) / 2;
  var sumOfSequenceOfSquares = (max * (max + 1) * ((2 * max ) + 1)) / 6;

  return Math.pow(sumOfSequence, 2) - sumOfSequenceOfSquares;
}

console.log(sumSquareDifference(100));
