function isPrime(number) {
  var sqrtOfNumber = Math.floor(Math.sqrt(number));
  var isPrime = true;

  for (var i = 2; i <= sqrtOfNumber; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
}

function findPrimes(max) {
  var n = 1;
  var primes = [2, 3];

  while ((6 * n) + 1 < max) {
    var primeFormOne = (6 * n) - 1;
    var primeFormTwo = (6 * n) + 1;

    if (primeFormOne < max && isPrime(primeFormOne)) {
      primes.push(primeFormOne);
    }

    if (primeFormTwo < max && isPrime(primeFormTwo)) {
      primes.push(primeFormTwo);
    }

    n++;
  }

  return primes;
}

function summationOfPrimes(max) {
  var primes = findPrimes(max);
  var sum = 0;

  for (var i = 0; i < primes.length; i++) {
    sum += primes[i];
  }

  return sum;
}

console.log(summationOfPrimes(2000000));
