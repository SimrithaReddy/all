const { count } = require("console");
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let n = parseInt(readLine());

for(let i=1; i<=n; i++){
	let row = ""
	for(let j=0; j<n-i; j++){
		row+=" "
	}
	for(let j=0; j<i; j++){
		row+="#"
	}
	console.log(row);
}