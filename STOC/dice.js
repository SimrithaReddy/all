let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readline() {
  idx++;
  return data[idx - 1].trim();
}
let n =parseInt(readline());
if(n==1){
    console.log("6")
}
else if(n==6){
    console.log(1)
}else if(n==3){
    console.log("4")
}else if(n==4){
    console.log("3")
}else if(n==5){
    console.log("2")
}else{
    console.log("5")
}
let m =readline();
console.log(m)