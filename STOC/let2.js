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
let pairs = readLine().split(" ").map(Number);
let count = 0;

for(i=0; i<pairs.length; i++){
	let red = pairs[0]
	if(red = pairs[i]){
		count++;
	}
	if(i==pairs.length){
		red++
	}
}
console.log(count)