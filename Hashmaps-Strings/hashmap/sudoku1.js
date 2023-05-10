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
function ValidateRow(board1,row){
    let set = new Set();
    for(let j=0; j<9; j++){
        if(set.has(board1[row][j])){
            // console.log("validaterow")
            return false;

        }
        if(board1[row][j]!="."){
            set.add(board1[row][j])
        }
    }
    return true;
}


function ValidateCol(board1,col){
    let set = new Set();
    for(let j=0; j<9; j++){
        if(set.has(board1[j][col])){
            // console.log("validatecol")
            return false;
        }
        if(board1[j][col]!="."){
            set.add(board1[j][col])
        }
    }
    return true;
}


function ValidateBox(board1,StartRow,StartCol){
    let set = new Set();
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            let val = board1[i+StartRow][j+StartCol];
            if(set.has(val)){
                return false
            }
            if(val!="."){
                set.add(val)
            }
        }
    }
    return true;
}

function isValid(board1,row,col){
    return ValidateRow(board1,row) && ValidateCol(board1,col) && ValidateBox(board1,row-row%3 , col-col%3);
}

function isValidSudoku(board1){
    for(let i=0; i<9; i++){
        for(let j=0; j<9; j++){
            if(!isValid(board1,i,j)){
                return "False";
            }
        }
    }
    return "True";
}


let board1 =[];
for(let i=0; i<9; i++){
	board1.push(readLine().split(' '))
}
console.log(isValidSudoku(board1))