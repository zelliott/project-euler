function isHighlyDivisible(number) {
  var divisors = 0;
  var sqrtNumber = Math.floor(Math.sqrt(number));

  for (var i = 1; i <= sqrtNumber; i++) {
    if (number % i === 0) {
      divisors++;
    }
  }

  return divisors >= 250;
}

function findTriangularNumber() {
  var n = 1;
  var triangleNumber = 0;

  while (true) {
    triangleNumber += n;

    if (isHighlyDivisible(triangleNumber)) {
      return triangleNumber;
    } else {
      n++;
    }
  }
}

console.log(findTriangularNumber());
