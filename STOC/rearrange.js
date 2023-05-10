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
let n = parseInt(readLine())
function peak(no_of_ele , arr){
	if(no_of_ele == 1) return 1
	for(i=0; i<no_of_ele; i++){
        if(arr[0]>arr[1]){
            return "1"
        }
        else if(arr[i]>arr[i-1] && arr[i]>arr[i+1]){
            return i+1
        }
        else if(i==arr.length-1 && arr[i]>arr[i-1]){
            return i+1
        }
        else if(i==arr.length-1){
            return "-1"
        }
    }
}

for(i=0; i<n; i++){
    console.log(n)
	let no_of_ele = parseInt(readLine())
	let arr = readLine().split(" ").map(Number)
    console.log(arr)
	let output = peak(no_of_ele,arr)
	console.log(output)
}