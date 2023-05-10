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
let inputArr = readLine().split(" ").map(Number)
let target = [];
target[n-1]=inputArr[n-1];
let max = inputArr[n-1];
for(i=n-2; i>=0; i--){
	if(inputArr[i] > max){
		max = inputArr[i]
	}
	target[i] = max;
}

let sum =0;
for(i=0; i<n; i++){
	sum = sum +(target[i]-inputArr[i])
}
console.log(sum)