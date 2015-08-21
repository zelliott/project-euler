function confirmSmallestMultiple(min, max, number) {
  var isConfirmed = true;
  
  for (var i = min; i <= max; i++) {
    if (number % i !== 0) {
      isConfirmed = false;
      break;
    }
  }

  return isConfirmed;
}

function findSmallestMultiple(min, max) {
  var smallestMultiple = max;
  var smallestMultipleIsConfirmed = false;

  while (!smallestMultipleIsConfirmed) {
    smallestMultiple += max;
    smallestMultipleIsConfirmed = confirmSmallestMultiple(min, max, smallestMultiple);  
  }

  return smallestMultiple;
}

console.log(findSmallestMultiple(11, 20));
