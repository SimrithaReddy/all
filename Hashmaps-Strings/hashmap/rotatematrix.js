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
let m= parseInt(readLine())
let arr=[];

for(i=0; i<m; i++){
	let a= readLine().split(" ").map(Number)
	arr.push(a)
}

let col=arr[0].length
let rotatematrix=[];

for(i=0;i<col; i++){
    let row =[]
	for(let j=m-1; j>=0; j--){
		row.push(arr[j][i])
	}
    rotatematrix.push(row)
}
console.log(rotatematrix.length)
console.log(rotatematrix)

for(let i=0; i<rotatematrix.length; i++){
    console.log(rotatematrix[i].join(" "))
}