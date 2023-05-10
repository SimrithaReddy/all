let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}


let [t,n] = readLine().split(" ").map(Number);

let str = [];
for(let i=0; i<t; i++){
    let tmp = readLine();
    str.push(tmp)
}
let count = 0;
//console.log(t,n)
for(let i=0; i<n; i++){
    for(let j=0; j<t-1; j++){
        if(str[j][i]>str[j+1][i]){                          //str[0][0]  >str[1][0]
            count++;
            break;
        }
    }
}
console.log(count)