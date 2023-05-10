let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readline() {
  idx++;
  return data[idx - 1].trim();
}
let n=readline().split("");
let sum =0;
let product=1;
console.log(n)
if(n==0){
    console.log(0)
  }else{
  for(i=0;i<n.length;i++){
    let n1=parseInt(n[i]);
    sum=sum+n1;  
    product=product*n1;
  }
  console.log(product-sum)
}

