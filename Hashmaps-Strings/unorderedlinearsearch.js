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

let K = parseInt(readLine())
let n = parseInt(readLine())
let flag = false;


for(let i=0; i<n; i++){
	if(K==parseInt(readLine())){
		flag=true;
		console.log(i)
		break;
	}
}

if(flag==false){
	console.log(-1)
}