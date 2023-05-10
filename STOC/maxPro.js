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
let arr =[];
 for(i=0; i<n; i++){
	 let tmp = parseInt(readLine())
	 arr.push(tmp)
 }
 if(n==3)  console.log(arr[0]*arr[1]*arr[2])

 else{
    for(i=0; i<n; i++){
    if(arr[i]<arr[i+1]){ // 6 9
        let tmp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = tmp
    }
 }
 console.log(arr)
}
 console.log(arr[0]*arr[1]*arr[2])