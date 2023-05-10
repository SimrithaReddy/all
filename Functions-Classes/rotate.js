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
let row_length = parseInt(readLine())
let array = [];
for(let i=0; i<row_length; i++){
	let element = readLine().split(" ").map(Number)
	array.push(element)
}
console.log(array[0].length)
let column_length = array[0].length;
let rotate_Matrix = [];
for(let j=0; j<column_length; j++){
    let row_Matrix  =[]
	for(let k=row_length-1; k>=0; k--){
		row_Matrix.push(array[k][j]);
	}
    rotate_Matrix.push(row_Matrix)
}
for(i=0;i<rotate_Matrix.length; i++){
    console.log(rotate_Matrix[i].join(" "))
}