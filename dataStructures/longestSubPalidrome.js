const isPalindrome = (str) => {
    let allLen = str.length
    let len = Math.floor(allLen / 2);
    for (let i = 0; i <= len; i++) {
        if (str[i] !== str[allLen - 1 - i]) {
            return false;
        } 
    }
    but = false
    return true
};


const longestPalidrome = (str) => {
  let len = str.length;
  let maxLen = 1;
  let but = true
  isPalindrome('aaa')
  return but


  // let rightInd = 0;
  // let leftInd = 1;
  // let flag = false;
  // let odd = false;
  // let add = false;
  // for (let i = 0; i < len; i++) {
  //   add = true
  //   if (str.charAt(i) === str.charAt(i - maxLen - 1)) {
  //     if (isPalindrome(str.slice(i - maxLen - 1, i + 1))) {
  //       rightInd = i - maxLen - 1;
  //       leftInd = i + 1;
  //       flag = true;
  //       maxLen+= 2;
  //       console.log('but')
  //       add = false;
  //     }
  //   }    
  //   else if (str.charAt(i) === str.charAt(i - maxLen)) {
  //     if (isPalindrome(str.slice(i - maxLen, i + 1))) {
  //       flag = true;
  //       rightInd = i - maxLen;
  //       leftInd = i + 1;
  //       maxLen+= 2;
  //     }
  //   } else {
  //     flag = false;
  //   }
  // }
  // if (isPalindrome(str.slice(rightInd, leftInd + 1))) {
  //   return str.slice(rightInd, leftInd + 1)
  // }
  // return str.slice(rightInd, leftInd);
};


console.log(longestPalidrome('"tattarrattat"'))