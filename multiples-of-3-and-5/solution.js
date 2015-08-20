// Using loop
var sumOfMultiples = function(limit) {
  var sum = 0;
 
  for (var i = 0; i < limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
};

// Using math
var sumOfMultiplesTwo = function(limit) {
  
  --limit;

  var sumOfCount = function(count) {
    return Math.floor((count * (count + 1)) / 2);
  };
  
  var numberOfMultiplesOfThree = Math.floor(limit / 3);
  var numberOfMultiplesOfFive = Math.floor(limit / 5);
  var numberOfMultiplesDoubleCounted = Math.floor(limit / 15);
 
  return (3 * sumOfCount(numberOfMultiplesOfThree)) + 
    (5 * sumOfCount(numberOfMultiplesOfFive)) - 
    (15 * sumOfCount(numberOfMultiplesDoubleCounted));
};

if (process.argv.length !== 3) {
  throw new Error('Input should be one Integer argument greater than 0.');
} else {
  console.log(sumOfMultiplesTwo(process.argv[2]));
}

