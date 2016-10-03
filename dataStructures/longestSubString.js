

var lengthOfLongestSubstring = function(s) {
    let sub = '';
    let max = 0;
    let mem = {};
    let count = 0;
    let len = s.length;
    let shave = 0
    for (let i = 0; i < len; i++){
        if(mem[s[i]] === undefined){
            sub+= s[i];
            count++;
            mem[s[i]] = i;
        } else {
            if (count > max) {
                max = count;
            }
            let ind = mem[s[i]] + 1 - shave;
            let anti = sub.slice(0, ind);
            shave+= anti.length;
            console.log(shave)
            sub = sub.slice(ind);
            sub+= s[i];
            mem[s[i]] = i;
            for (let j = 0; j < anti.length - 1; j++) {
                delete mem[anti[j]];
            }
            count = sub.length;
        }
        console.log(sub)
    }
    return count > max ? count : max;
};


console.log(lengthOfLongestSubstring("abcabcbb"));