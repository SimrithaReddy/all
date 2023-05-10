let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let n = parseInt(readLine());

for(let i=1; i<=n; i++){
    let str = "";
    for(let j=1; j<=n-i; j++){
        str+=" ";
    }
    for(let j=0; j<(2*i)-1; j++){
        if(i%2==0){
            if(j%2!==0){
                str+="*"
            }else{
                str+="$"
            }
        }else{
            if(j%2==0){
                str+="*"
            }else{
                str+="$"
            }
        }
    }
    for(let j=1; j<n-i;j++){
        str+=" ";
    }
   console.log(str)
}
