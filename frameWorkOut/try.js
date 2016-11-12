function isEvenDivs(start, end, num) {
  var flag = true; 
  for (let i = start; i <=end; i++) {
    if (num % i !== 0) {
      flag = false;
    }
  }
  if (flag) {
    return num;
  } else {
    return isEvenDivs(start, end, num + 1)
  }
}

console.log(isEvenDivs(1,10,2519))
