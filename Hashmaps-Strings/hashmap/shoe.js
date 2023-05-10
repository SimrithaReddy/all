let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let n = parseInt(readLine());
let tmp = readLine().split(" ").map(Number);

let shoesizeMap = new Map();

for(let i=0; i<n; i++){
    if(shoesizeMap.has(tmp[i])){
        shoesizeMap.set(tmp[i],1+shoesizeMap.get(tmp[i]));
    }
    else{
        shoesizeMap.set(tmp[i],1+0);
    }
}


let t = parseInt(readLine());
let sum = 0;

while(t--){
    let [size, cost] = readLine().split(" ").map(Number);
    if(shoesizeMap.get(size)>=1){
        // if(shoesizeMap.get(size)>=1){ 
        sum = sum + cost;
        shoesizeMap.set(size,shoesizeMap.get(size)-1);
    }
    // }
}

console.log(sum)