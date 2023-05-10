let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let m=parseInt(readLine());
let max=parseInt(readLine());
let n=parseInt(readLine());
for(i=0;i<n;i++){
    let tmp=parseInt(readLine());
    for(j=1;j<=m;j++){
        
    }
    console.log(tmp)
}