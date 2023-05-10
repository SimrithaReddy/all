let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let n = parseInt(readLine())
let inputArr =[];
let indiceArr = [];
let target = [];
for(i=0; i<n; i++){
    inputArr[i] = parseInt(readLine())
}
for(i=0; i<n; i++){
    indiceArr[i] = parseInt(readLine())
}
 for(i=0; i<n; i++){
    if(target[indiceArr[i]] == undefined){
        target[indiceArr[i]] = inputArr[i]
    }
    else{
        target.splice(indiceArr[i],0,inputArr[i])
    }
 }
 for(i=0; i<n; i++){
    console.log(target[i])
 }