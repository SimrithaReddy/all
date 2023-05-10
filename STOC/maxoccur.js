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
let M = readLine().split(" ").map(Number);
let numofQueries = M[1]
let integers = readLine().split(" ").map(Number)
for(i=0;i<numofQueries; i++){
	let queries = readLine().split(" ").map(Number)
	let L = queries[0]
	let R = queries[1]
	for(let j=L; j<=R; j++){
		let sum=0;
		sum=sum+integers[j]
		if(j==R){
			console.log(sum)
			sum=0
		}
		}
}