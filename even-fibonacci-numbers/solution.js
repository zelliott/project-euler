var LIMIT = 4000000;
var sum = 0;
var previousFib = 1;
var currentFib = 2;

while (currentFib <= LIMIT) {
  sum += currentFib;
  previousFib = previousFib + (2 * currentFib);
  currentFib = (2 * previousFib) - currentFib; 
}

console.log(sum);

