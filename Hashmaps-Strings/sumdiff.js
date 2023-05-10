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
getMaxMindiff=function(arr,n){
	for(i=0; i<arr.length; i++){
		for(j=i+1; j<arr.length; j++){
			if(arr[i]>arr[j]){
				tmp = arr[i]
				arr[i] = arr[j]
				arr[j] = tmp
			}
		}
	}
    let diff =0;
    let sum = 0;
    let min = 0; 
    for(i=0; i<n; i++){
        min=min+arr[i]
        sum=sum+arr[arr.length-1-i]
    }
    diff = sum - min;
	return diff;
}


let t = parseInt(readLine())
for(let i=0; i<t; i++){
	let tmp = readLine().split(" ").map(Number)
	n = tmp[1];
	let arr = readLine().split(" ").map(Number)
    let res = getMaxMindiff(arr,n)
	console.log(res)
}