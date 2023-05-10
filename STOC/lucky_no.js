let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------
let n = parseInt(readLine())
let count = 1
let arr = []
for(let i=0; i<n; i++){
	arr.push(parseInt(readLine()))
}

for(let i=0; i<n; i++){
	 if(arr[i]==1){
        console.log(1)
        break;
    }
    
	if(arr[i]==arr[i+1]){
		count++;
        if(count == arr[i]){
		console.log(arr[i])
		break;
	}
}
}