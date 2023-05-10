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

let n = parseInt(readLine());
let arr = readLine().split(" ").map(Number);
let max = Number.NEGATIVE_INFINITY, min = Number.POSITIVE_INFINITY;
let j,k;
for(let i=0; i<n; i++){
    if(arr[i]>max){
        max=arr[i]
        j=i;
    }
    if(arr[i]<min){
        min = arr[i];
        k=i;
    }
}

let tmp = arr[k];
arr[k] = arr[j];
arr[j] = tmp;

//console.log(arr);
let sum =0;
for(let i=0; i<n; i++){
	sum+=Math.abs(arr[i]-i-1);  //5 9 3 2 6 7
    //console.log(sum)
}
console.log(sum)