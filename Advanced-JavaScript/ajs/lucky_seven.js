let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function lucky_sevens(array){
    for (let index = 0; index < array.length-2; index++) {
        let sum = array[index] + array[index+1] + array[index+2];
        if(sum==7){
           return true;
        }
    }
    return false;
}


let arr = readLine().split(' ').map(Number);
let res = lucky_sevens(arr);
console.log(res);
