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
let m =parseInt(readLine())
let n= parseInt(readLine())
let arr= readLine().split(" ").map(Number)
let arr1= readLine().split(" ").map(Number)

let result = Math.abs(arr[0])
let min = Math.abs(arr1[0])
for(i=1; i<m; i++){
	if(Math.abs(arr[i])  > result){
		result = Math.abs(arr[i])
	}
}
for(i=1; i<n; i++){
	if(Math.abs(arr1[i])  > min){
		min = Math.abs(arr1[i])
	}
}
 
 let answer = result*min
 console.log(answer)