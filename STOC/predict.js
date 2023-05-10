let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n=parseInt(readLine());
console.log(n)
for(i=0;i<n;i++){
    let tmp=parseInt(readLine());
    if(tmp==2){
        console.log("Yes")
    }else{
    for(j=2;j<tmp;j++){
        if(tmp%j==0){
            console.log("No")
            break;
        }else{
            console.log("Yes")
            break;
        }
    }
}
}