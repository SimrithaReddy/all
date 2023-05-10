let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readline() {
  idx++;
  return data[idx - 1].trim();
}
let n =parseInt(readline());
let ar=[];//create an empty array
for(i=0;i<n;i++){
    let tmp =parseInt(readline());
    ar.push(tmp);//tmp elements pushed into ar array
}
console.log(ar)