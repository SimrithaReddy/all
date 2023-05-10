let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let n = parseInt(readLine())
let arr=[];

for(i=0; i<n; i++){
	arr.push(parseInt(readLine()))
}
console.log(arr)
for(i=1; i<arr.length-1; i++){
    if(arr[i]>arr[i+1]){
        console.log(arr[i+1])
        arr[i+1]=arr[i]
        console.log(arr[i])
    }
}
console.log(arr)