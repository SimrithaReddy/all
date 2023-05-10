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
let n =parseInt(readLine())
let min =Number.NEGATIVE_INFINITY;
for(let i=0;i<n;i++){
	let tmp= parseInt(readLine());
	if(min<tmp){
		min=tmp
	}
}
let sum=0;
while(min>0){
	let rem =min%10;
	sum=sum+rem;
	min=parseInt(min/10)
}
if(sum%2==0){
	console.log(1)
}else{
	console.log(0)
}