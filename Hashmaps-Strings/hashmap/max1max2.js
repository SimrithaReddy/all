let fs = require("fs");
const { markAsUntransferable } = require("worker_threads");
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
let max1 = max2 = Number.NEGATIVE_INFINITY;
for(let i=0; i<n; i++){
	let curr = parseInt(readLine());
	if(curr > max1){
		max2 = max1;
		max1 = curr;
	}else if(max1 >=curr && curr>=max2){
		max2 = curr;
	}
}
console.log(max2);