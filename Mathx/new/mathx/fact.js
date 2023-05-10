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

function fact(n) {
    if (n == 0) return 1;
    else {
        return n * fact(n - 1)
    }
}

let n = parseInt(readLine())

if (n == 2) {
    console.log(3)
} else if (n == 1) {
    console.log(1)
} else {
    let a = fact(n - 3)
    let b = fact(n)
    let reqd = b / a

    console.log(reqd + 1)
}