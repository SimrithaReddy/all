let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let n = parseInt(readLine());
let array = readLine().split(" ").map(Number);
let max = [];
//let another_max = 0;
for(let i=0; i<array.length; i++){
	if(array[i]>max){
		max.push(array[i])
       // console.log(max)
	}
}
let sum =0;
for(let j=0; j<max.length; j++){
for(let i=0; i<n; i++){
	sum = sum+max[j]-array[i]
    //console.log(-sum)
}
}
console.log(-sum)