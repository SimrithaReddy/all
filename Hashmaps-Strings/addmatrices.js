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
function addition_matrices(matrix1,matrix2){
	let sum =[];
	for(let i=0; i<matrix1.length; i++){
		let each_row_sum = [];
		for(let j=0; j<matrix2.length; j++){
			let add = matrix1[i][j] + matrix2[i][j]
			each_row_sum.push(add)
		}
		sum.push(each_row_sum)
	}
	return sum;
}

let m = parseInt(readLine())
let matrix1 = [];

for (let i=0; i<m; i++){
	matrix1.push(readLine().split(' ').map(Number))
}

let n = parseInt(readLine())
let matrix2 = [];

for (let i=0; i<n; i++){
	matrix2.push(readLine().split(' ').map(Number))
}

if((matrix1.length==matrix2.length)&&(matrix1[0].length==matrix2[0].length)){
	let addition = addition_matrices(matrix1,matrix2)
	for(let i=0; i<addition.length; i++){
		console.log(...addition[i])
	}
}else{
	console.log(-1)
}