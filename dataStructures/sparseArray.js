// There are  strings. Each string's length is no more than N characters. There are also Q queries. 
// For each query, you are given a string, and you need to find out how many times this string occurred previously.

// Input Format

// The first N line contains , the number of strings.
// The next  lines each contain a string.
// The nd line contains , the number of queries.
// The following  lines each contain a query string.

// Constraints

// Sample Input

// 4
// aba
// baba
// aba
// xzxb
// 3
// aba
// xzxb
// ab
// Sample Output

// 2
// 1
// 0
// Explanation

// Here, "aba" occurs twice, in the first and third string. The string "xzxb" occurs once in the fourth string, 
// and "ab" does not occur at all.
var foo = '4\nadfd\nadf\nafd\nafd\n3\nadfd\nadf\nafd'
function processData(input) {
    //Enter your code here
    input = input.split('\n');
    var N = input[0];
    var Q = input[+ N + 1]
    var lines = input.slice(1,(+ N + 1))
    var queries = input.slice((+ N + 2))
    queries.forEach(val => {
      var count = 0;
      lines.forEach(value => {
        if(val === value) {
          count++;
        }
      });
      console.log(count);
      count = 0;
    })
} 
processData(foo);


