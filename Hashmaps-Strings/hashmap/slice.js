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

// let [row,col] = readLine().split(" ").map(Number);
// let matrix = [];

// for(let i=0; i<row; i++){
// 	matrix.push(readLine().split(" ").map(Number))
// }
// let [l,r,t,b] = readLine().split(" ").map(Number);
// for (let i = t - 1; i < b; i++) {
//     let res = [];
//     for (let j = l - 1; j < r; j++) {
//         res.push(matrix[i][j]);
//     }
//     console.log(...res);
// }

let [row,col] = readLine().split(" ").map(Number);
let matrix = [];

for(let i=0; i<row; i++){
	matrix.push(readLine().split(" ").map(Number))
}
let [l,r,t,b] = readLine().split(" ").map(Number);
let slice_row = [];

for(let i=0; i<row; i++){
   let slice= matrix[i].slice(l-1,row.length)
   slice_row.push(slice)
}
// console.log(slice_row)

let slice_right = [];

for(let i=0; i<row; i++){
    let slice = slice_row[i].slice(row.length-1,r-1);
    slice_right.push(slice);
}
// console.log(slice_right)

let slice_top=[];
for(let i=t-1; i<=b-1; i++){
    slice_top.push(slice_right[i])
}

// console.log(slice_top)

for(let i=0; i<slice_top.length; i++){
    console.log(...slice_top[i])
}
