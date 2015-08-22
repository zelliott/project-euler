function isPalindrome(numberAsString) {
  return numberAsString === numberAsString.split('').reverse().join('');
}

function isProductOfThreeDigitNumbers(number) {
  var i = 100;
  while (i < 1000) {
    if ((number % i === 0) && ((number / i).toString().length === 3)) {
      return true;
    } else {
      i++;
    }
  }
}

function findLargestPalindrome() {
  var number = 998001;

  while (number >= 0) {
    if (isPalindrome(number.toString())) {
      if (isProductOfThreeDigitNumbers(number)) {
        return number;
      }
    }
    number--;
  }
}

console.log(findLargestPalindrome());
