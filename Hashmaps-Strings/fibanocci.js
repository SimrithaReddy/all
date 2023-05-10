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
let n = parseInt(readLine())
let arr = [0,1]
if(n<0){
	console.log(-1)
}
else if(n==0){
    console.log(0)
}
else if(n==1){
    console.log(1)
}
else{
    console.log(arr[0])
    console.log(arr[1])
	for(i=2; i<n; i++){
		arr[i]=arr[i-1]+arr[i-2];
		console.log(arr[i])
	}
}