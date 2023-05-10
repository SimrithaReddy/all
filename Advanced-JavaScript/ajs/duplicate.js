let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let arr = readLine().split(" ").map(Number).sort();               
let red = 0;                                                     
let remove_dupArray = [arr[0]];
 
for (let i = 1; i < arr.length; i++) {     //1 2 3 5 1 5 9 1 2 8       
    if(arr[i]!==arr[red]){       
        remove_dupArray.push(arr[i]);                   
        red = i; 
    }
}

console.log(...remove_dupArray)