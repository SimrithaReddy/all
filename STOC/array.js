let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readline() {
  idx++;
  return data[idx - 1].trim();
}
let n= parseInt(readline());
let m=readline().split(" ");//'1',2'.....
let ar =[];//empty array created
let count=0;
for(i=0;i<n;i++){
    tmp=parseInt(m[i]);//each single integer is read individually
    console.log(tmp)//array is created
    ar.push(tmp); // this can be used for adding tmp elements into array format
    /*push is used to add elements into array*/
    if(ar[i]<0){
        count++;
    }
}
console.log(count)