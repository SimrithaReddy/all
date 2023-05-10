let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readline() {
  idx++;
  return data[idx - 1].trim();
}
let rows=parseInt(readline());
let matrix=[];
for(i=0;i<rows;i++){
	let tmp=readline().split(" ").map(Number);
  matrix.push(tmp)////[ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10, 11, 12 ] ]
}
let cols=matrix[0].length;
 let transpose=[];
for(i=0;i<cols;i++){
  let matrix2=[];
  for(j=0;j<rows;j++){                            
    matrix2.push(matrix[j][i])
  }
    transpose.push(matrix2)
    //console.log(matrix2)
}
console.log(transpose[0])
console.log(transpose[0].length)