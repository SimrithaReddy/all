let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let num = parseInt(readLine())
let key = num
let cubes = 0
while(num>0){
    let rem = num%10
    cubes= (rem*rem*rem)+cubes
    num =parseInt(num/10)
}
console.log(cubes)
if(key == cubes){
    console.log("amstrong")
}
else{
    console.log("not amstrong")
}
