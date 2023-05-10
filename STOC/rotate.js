let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n=readLine().split(" ");
console.log(n)
let tmp=[];
let k=readLine();
for(i=0;i<n;i++){
    
}