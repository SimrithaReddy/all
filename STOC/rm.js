let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function replaceElements(arr){
    // Implement this function    
	let temp = arr[arr.length-1]
	arr[arr.length-1] =-1
	for(i=arr.length-2; i>=0; i--){
		let curr=arr[i]
		arr[i] = Math.max(temp,arr[i+1])
		temp = Math.max(curr, temp)
	}
	return arr
}

// Do not edit anything below
let numElems = parseInt(readLine());
let arr = [];
for (let index=0;index<numElems;index++){
        arr.push(parseInt(readLine()));
}
let res=replaceElements(arr);

  console.log(res);
