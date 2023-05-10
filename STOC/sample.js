let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readline() {
  idx++;
  return data[idx - 1].trim();
}
let n=readline().split("");
let t=[];//['8','9','7']
console.log(n)
console.log(n[2])
console.log(n.length)
for(i=0;i<n.length;i++){
    t[i] = n[n.length-1-i];//-1 bcoz of index
    console.log(t[i])
}

