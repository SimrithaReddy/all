let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readline() {
  idx++;
  return data[idx - 1].trim();
}
//let n= parseInt(readline());
let m=readline().split("");
let sum=0;
let product=1;
let count =0;
for(i=0;i<m.length;i++){
    if(m[i]==0){
        count++;
    }
}
console.log(count);
if(count=1){
  for(i=0;i<m.length;i++){
    let m1=parseInt(m[i]);
    sum=sum+m1;
  }
}
console.log(sum)