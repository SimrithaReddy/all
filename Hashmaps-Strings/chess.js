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
let input = readLine().split(' ').map(Number)

let n = input[2];
let i = input[0] + 2*n;
let j =  input[1] + n;

if((i==3||i==4||i==5||i==6||i==7||i==8) && (j==3||j==4||j==5||j==6||j==7||j==8)){
    console.log("j")
    console.log(8)
}else if((i==2||i==9)&&(j==3||j==4||j==5||j==6||j==7||j==8)){
    console.log(6)
}else if((i==1||i==10)&&(j==3||j==4||j==5||j==6||j==7||j==8)){
    console.log(4)
}else if((i==2||i==9)&&(j==2||j==9)){
    console.log(4)
}else if((i==3||i==4||i==5||i==6||i==7||i==8)&&(j==2||j==9)){
    console.log(6)
}else if((i==3||i==4||i==5||i==6||i==7||i==8)&&(j==1||j==10)){
    console.log(4)
}else if((i==1||i==10)&&(j==1||j==10)){
    console.log(2)
}else{
    console.log(3)
}