let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n=parseInt(readLine());
let ar=[];
let sum=0;
let minus=0;
for(i=0;i<n;i++){
    ar[i]=parseInt(readLine())
}
for(i=0;i<n;i=i+2){
    sum=sum+ar[i];
}
for(i=1;i<n;i=i+2){
    minus=minus-ar[i];
}
console.log(sum+minus)
