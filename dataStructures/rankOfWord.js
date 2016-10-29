const rankOfWord = function(str) {

  const alpha = {};
  let uniqueLetters = [];
  for (let i = 0; i < str.length; i++) {
    if (!alpha[str.charAt(i)] === undefined) {
      alpha[str.charAt(i)] = 1;
    } else {
      alpha[str.charAt(i)]+= 1;
    }
  };
  for (x in alpha) {
    uniqueLetters.push(x);
  };

  uniqueLetters.sort(function(a,b) {
    return a > b;
  });

  return uniqueLetters;

};

const calPermutations = function(len, str) {
  top = factoral(len);
  bottom = 1;
  for ()
}

const factoral = function(num) {
  if (num === 1) {
    return num;
  }
  return num * (factoral(num -1));
}

// find the rank of "SEE"
// first we generate a object that counts each instance of a letter;
// then we generate unique letter and sort them alphabetically
// then 

let foo = "XAAABBBBCJDHSIIIS"
console.log(rankOfWord(foo));