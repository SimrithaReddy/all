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


function sorts(inputArr){
	
    for(i=inputArr.length-1; i>=0; i=i-2){
        if(inputArr[i]<inputArr[i+2]){
            let tmp = inputArr[i]
            inputArr[i] = inputArr[i+2]
            inputArr[i+2] = tmp
    }
}
    for(i=1; i<inputArr.length; i=i+2){
        if(inputArr[i]>inputArr[i+2]){
            let tmp = inputArr[i]
            inputArr[i] = inputArr[i+2]
            inputArr[i+2] = tmp
    }
}
    return inputArr
}
let n = parseInt(readLine())

for(let i=0; i<n; i++){
    inputArr= readLine().split(" ").map(Number)
    let output = sorts(inputArr)
    console.log(output)
}