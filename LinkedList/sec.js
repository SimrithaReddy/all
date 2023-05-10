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

let noOfTestCases = parseInt(readLine());

for(let i=0; i<noOfTestCases; i++){
	let n = parseInt(readLine());
	let arr = readLine().split(" ").map(Number).sort();
	
	// let s = arr.sort();
    // console.log(s)
	let a = arr[n-1];

	for(let i=arr.length-1; i>=0; i--){
	     console.log(arr[i],a)
	    if(arr[i] < a){
	        console.log(a)
	        a = arr[i];
	        console.log(a)
	        break;
	    }
	}
}