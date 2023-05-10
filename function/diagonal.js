let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// name your function as rightToLeftDiagonal
function rightToLeftDiagonal(matrix){
    
	for(i=0,j=m-1;i<m;i++,j--){
        let array=[];
        array.push(matrix[i][j])
	
    return array;
    }
}

// Do not change anything below this line
let m = parseInt(readLine());
let matrix = [];
for (let row = 0; row < m; row++) {
  let rowElements = readLine().split(" ");
  matrix.push(rowElements);
}

let result = rightToLeftDiagonal(matrix);
console.log(result)
/*for (element of result) {
 console.log(element);
 console.log(typeof(element))
}*/