const { reverse } = require("dns");
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let str = readLine().split(" "); //"Welcome to this Javascript Guide!"

let r = str.reverse().join(" ").split("").reverse().join("");
console.log(r)
//olleH yM eman si ZYX