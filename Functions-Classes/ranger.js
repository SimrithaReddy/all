let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking inplet fs = require("fs");

function rangeProduct(arr,n){
	if(n==1){
		return 1;
	}
}

let t = parseInt(readLine());
while(t--){
	let n = parseInt(readLine());
	let arr = readLine().split(" ").map(Number);
	let res = rangeProduct(arr,n);
	console.log(...res)
}