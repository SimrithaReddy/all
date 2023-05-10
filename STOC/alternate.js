let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readline() {
  idx++;
  return data[idx - 1].trim();
}
let n= parseInt(readline());
let m=readline().split(" ");
let sum=0;
for(i=0;i<n;i=i+2){
	let tmp=parseInt(m[i]);
  sum=sum+tmp;
  console.log(sum)
}
console.log(sum)