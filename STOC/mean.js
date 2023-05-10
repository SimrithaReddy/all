let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readline() {
  idx++;
  return data[idx - 1].trim();
}
let n =parseInt(readline());
let m =readline().split(" ");
let sum=0;
for(i=0;i<n;i++){
	let tmp=parseFloat(m[i]);
	sum=sum+tmp;
}
let mean=parseInt(sum/n);/*parseint is used to eliminate decimal value acc to given o/p //floor(954.67)=954*/
console.log(mean)
    

