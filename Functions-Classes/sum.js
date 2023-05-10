let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}


let n=parseInt(readLine())

if(n%2==0){
    
}


let tmp = parseInt(readLine())

let m=readLine().split(" ").map(Number);

let ar=[]

for(let i=0;i<n;i++){
ar.push(m[0])
}
