let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function noOf1s(n){
    let count = 0;
    console.log(n)
    while(n){
        n= n & (n-1);
        console.log(n)
        count++;
    }
    return count;
}
let a_length = parseInt(readLine());
let arr = readLine().split(" ").map(Number)

arr.sort(function (a,b) {
    let na = noOf1s(a);
    let nb = noOf1s(b);
    console.log(nb)
    return nb-na;
})
console.log(arr.join(" "))