// Runtime of this solution is:
// O(sqrt(n)) for findFactors
// O(listOfFactors * sqrt(n)) for findLargestPrime
// Thus, runtime is bounded by O(listOfFactors * sqrt(n))... not super great,
// will improve.

function isPrime(number) {
  if (number <= 3) {
    return true;  
  } else if (number % 2 === 0 || number % 3 === 0) {
    return false;  
  } else {
    
    var sqrtOfNumber = Math.floor(Math.sqrt(number));
    var isPrime = true;

    var i = 3;
    while (i++ <= sqrtOfNumber) {
      if (number % i === 0) { 
        isPrime = false;
        break;
      } 
    }

    return isPrime;
  }
}

function findFactors(number) {
  var sqrtOfNumber = Math.floor(Math.sqrt(number));
  var factors = [];

  var i = 0;
  while (i++ <= sqrtOfNumber) {
    if (number % i === 0) {
      factors.push(i)
      factors.push(number / i);
    }
  }
  
  return factors;
}

function findLargestPrime(arr) {
  var largestPrime;
  
  for (var i = 0; i < arr.length; i++) {
    var potentialPrime = arr[i];

    if (isPrime(potentialPrime)) {
      largestPrime = potentialPrime;  
    }
  }

  return largestPrime;
}

console.log(findLargestPrime(findFactors(600851475143)));
