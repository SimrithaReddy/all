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
	// write your code here
    console.log(number)
    if(number<0){
        return undefined;
    }
    else if(number==0){
     return 1;
    }
    else{
	let fact=number;
    console.log(fact)
	for(let i=number-1;i>0;i--){
	fact=fact*i;
    console.log(fact)  // 5*1 5*4 5*4*3 
	}
	return fact;
}
}
let number = parseInt(readLine());
console.log(factorial(number));
