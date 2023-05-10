let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let n = parseInt(readLine());

let arr=[]


for(let i=0; i<n; i++){
    arr.push(parseInt(readLine()));
}

let min = arr[0];
let maxP= 0;

for(let i=0; i<arr.length; i++){
    min=Math.min(min,arr[i])
    let profit = arr[i]-min;
    maxP = Math.max(maxP,profit)
}
console.log(maxP)