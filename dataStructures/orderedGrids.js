function processData(input) {
    //Enter your code here
    input = input.split('\n');
    let results = '';
    let T = parseInt(input.shift());
    for (let i = 0; i < T; i++) {
        if (i > 0) {
            results+= "\n"
        }
        console.log(input)
        let n = parseInt(input.shift());
        let curResult = "YES";
        let curMax = "a";
        let nextMin = "z";
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                if (input[j].charAt(k) >= curMax) {
                    curMax = input[j].charAt(k);
                }
                if (j < n - 1) {
                    if (input[j+1].charAt(k) <= nextMin) {
                        nextMin = input[j+1].charAt(k);
                    }
                }
            }
            if (j < n - 1) {
                if (curMax > nextMin) {
                    curResult = "NO";
                    break;
                }
            }
            curMax = "a";
            nextMin = "z";
            if (curResult === "NO") {
                break;
            }
        }
        input = input.slice(n);
        results+= curResult;
    }
    console.log(results);
} 


const foo = "2\n5\neabcd\nfghij\nalkmn\ntrpqs\nxywuv\n6\neabcd\nfghij\naaaaa\ntrpqs\nxywuv\naaaaa";

console.log(processData(foo));
