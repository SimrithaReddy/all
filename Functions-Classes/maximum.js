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


let n =parseInt(readLine()); //keyword to store any(number,string,array) let n =4
let a=[]; //[]
for(i=0; i<n; i++){
	let element=parseInt(readLine())//4     4 5            4 5 6
	a.push(element) //[4,5,6]
}
let max_count = 0;
let answer=[];
for(let i=0; i<n; i++){
	count=1
	for(let j=i+1; j<n; j++){
		if(a[i]==a[j]){
			count++
		}
		else{
			break;
		}
	}
	if(count > max_count){
		max_count = count
		answer=[]
		answer.push(a[i])
	}
	else if(count == max_count){
		answer.push(a[i])
	}
}
if(answer.length== 0){
	console.log(-1)
}
else{
	for(i=0; i<answer.length; i++){
	console.log(answer[i])
}
}