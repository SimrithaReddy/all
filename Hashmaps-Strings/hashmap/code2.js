let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function nonRepeatingCharacters(st){
    let map = new Map();
    for(let i=0; i<st.length; i++){
        if(map.has(st[i])){
            map.set(st[i],map.get(st[i])+1);
        }else{
            map.set(st[i],1+0);
        }
    }
    
    let arr = [];
    for(let val of map){
        if(val[1]===1){
            arr.push(val[0]);
        }
    }

    if(arr.length===0){
        return -1;
    }else{
        return arr[0];
    }
}


let test_cases = parseInt(readLine());
while(test_cases--){
    let st = readLine();
    let index = nonRepeatingCharacters(st);
    if(index!==-1){
        console.log(st.indexOf(index));
    }else{
        console.log(-1);
    }
}