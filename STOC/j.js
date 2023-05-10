let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let n = parseInt(readLine())
let arr=[]
for(i=0; i<n; i++){
    let tmp = parseInt(readLine())
    arr.push(tmp)
}
let max3 = arr[0]
let max = arr[0]
let max2 = arr[0]
for(i=0; i<n; i++){
    if(arr[i]>max){
        max3 = max2
        max2 = max
        max = arr[i]
    }
    else if(arr[i]>max2){
        max3 = max2;
        max2 = arr[i]
    }
    else if(arr[i]>max3){
        max3 = arr[i]
    }
}

console.log(max3*max2*max)