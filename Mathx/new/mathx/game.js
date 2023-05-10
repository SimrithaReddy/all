let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

function game(num, pos1) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        arr.push(i)
    }

    let pos = pos1 - 1;

    while (arr.length != 1) {
        if (pos >= arr.length) {
            pos -= arr.length
            continue;
        }
        arr.splice(pos, 1)
        pos--
        pos += pos1
    }

    console.log(arr[0]);
}

let t = parseInt(readLine())
while (t--) {
    let [num, pos1] = readLine().split(" ").map(Number);
    game(num, pos1)
}
