
// Give a number calculate the total number of possible combinations NOT PERMUTATIONS possible
function calculateCombos(num) {
  let total = 0;
  for (let i = 1; i <=num; i++) {
    total+= (factorial(num)/ (factorial(num - i)* factorial(i)));
  }
  return total;
}

function factorial(num) {
  if (num <= 1) return 1;
  return num * factorial(num-1);
}