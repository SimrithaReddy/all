let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------

let n = parseInt(readLine());
let arr = [];

for(let i=0; i<n; i++){
    arr.push(parseInt(readLine()))
}
let count = 1;
let flag = false;

for(let i=0; i<n; i++){  
       let first = arr[i]                           
    for(let j=i+1; j<n; j++){    // j=1    j=2          j=2
        if(first==arr[j]){      //2==2     2==2       2==2
            count++; 
            i++;                  // 2         3          2
        }else{
            break;
        }
    }
    if(count==first){
        flag=true;
        console.log(first)
        break;
    }
    count=1;
}

if(flag==false){
    console.log(-1)
}