let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}


let testCase = parseInt(readLine());

let print = (left, right) =>{
    if(left > right) {
        console.log("");
        return 0;
    }
    process.stdout.write(left + " ");
    print(left + 1, right);
}

while(testCase !== 0){
    let leftAndRight = readLine().split(" ").map(Number);
    print(leftAndRight[0], leftAndRight[1]);
    testCase -= 1;
}
