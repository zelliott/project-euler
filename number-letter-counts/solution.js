var numberWordMap = {
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine',
  '10': 'ten',
  '11': 'eleven',
  '12': 'twelve',
  '13': 'thirteen',
  '14': 'fourteen',
  '15': 'fifteen',
  '16': 'sixteen',
  '17': 'seventeen',
  '18': 'eighteen',
  '19': 'nineteen',
  '20': 'twenty',
  '30': 'thirty',
  '40': 'forty',
  '50': 'fifty',
  '60': 'sixty',
  '70': 'seventy',
  '80': 'eighty',
  '90': 'ninety',
  '1000': 'onethousand'
};

function countLetters(max) {
  var lettersSum = 0;

  // Iterate over all numbers and sum their letter counts.
  while(max > 0) {
    var currentSum = 0;
    var savedMax = max;

    // Break down letter count of each number.
    while (max > 0) {

      if (typeof numberWordMap[max] !== 'undefined') {
        currentSum += numberWordMap[max].length;
        max = 0;
      } else {
        if (max > 20 && max < 100) {
          currentSum += numberWordMap[Math.floor(max / 10) * 10].length;
          max %= 10;
        } else {
          currentSum += numberWordMap[Math.floor(max / 100)].length;
          currentSum += 'hundred'.length;
          max %= 100;

          if (max !== 0) {
            currentSum += 'and'.length;
          }
        }
      }
    }

    lettersSum += currentSum;
    max = savedMax;
    max--;
  }

  return lettersSum;
}

console.log(countLetters(1000))
