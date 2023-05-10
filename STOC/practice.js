let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readline() {
  idx++;
  return data[idx - 1].trim();
}
let n=parseInt(readline());
let m=n.toString();
let re="";
console.log(m)
for(i=0;i<m.length;i++){
    re=m[i]+re;
console.log(parseInt(re))
}
console.log(n)
console.log(m)
