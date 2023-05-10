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
function factorial(number){
	let pro = 1;
	if(number<0){
		return undefined;
	}else if(number==0){
		return 1;
	}
	else{
		for(let i=number; i>=1; i--){
			pro = pro * i;
		}
		return pro;
	}


}

let number = parseInt(readLine());

console.log(factorial(number));