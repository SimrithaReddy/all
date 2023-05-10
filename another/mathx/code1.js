let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}


let n=parseInt(readLine())
let arr = readLine().split(" ").map(Number)
let count=0
for(let i=0;i<n;i++){
  if(arr[i]==i){
    count=count+1

  }


}
console.log(count)










