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

function insertionSort(arr,n){
    for(let i=1; i<n; i++){
        let key = arr[i];
        j=i-1;
        while(j>=0 && arr[j]>key){
            arr[j+1] = arr[j];
            console.log(arr)
            j--;
        }
        arr[j+1] = key;
    }
}

let t = parseInt(readLine());
while(t--){
	let n = parseInt(readLine());
	let A = readLine().split(" ").map(Number).sort((a,b)=>(a-b));
    //console.log(A)
	let B = readLine().split(" ").map(Number).sort((a,b)=>(b-a));
    //console.log(B)
	let count = 0;
	for(let i=0; i<n; i++){
		if(A[i]%B[i]===0 || B[i]%A[i]===0){
			count++
		}
	}
	console.log(count)
}