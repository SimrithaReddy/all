let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}


function checkMessage(str1,str2){
        let alreadyMap = new Map();
        let r =  str1.split(" ").join("")
        for(let i=0; i<r.length; i++){
            if(r[i]!=="." && r[i]!=="#" && r[i]!=="!"){
            if(alreadyMap.has(r[i])){
                alreadyMap.set(r[i],1+alreadyMap.get(r[i]))
            }else{
                alreadyMap.set(r[i],0)
            }
        }
    }
    // console.log(alreadyMap)
    let r1 = str2.split(" ").join("")
    //console.log(r1)
    for(let i=0; i<r1.length; i++){
        if(r1[i]!=="." && r1[i]!=="#" && r1[i]!=="!"){
        if(alreadyMap.has(r1[i])){
            if(alreadyMap.get(r1[i])==0){
                alreadyMap.delete(r1[i])
            }else if(alreadyMap.get(r1[i])>0){
                alreadyMap.set(r1[i],1-alreadyMap.get(r1[i]));
                if(alreadyMap.get(r1[i])==0){
                    alreadyMap.delete(r1[i])
                }
            }
        }
    }
    }
    //console.log(alreadyMap)


    if(alreadyMap.size === 0){
        return "YES"
    }
    return "NO"



}

let n = parseInt(readLine());
while(n--){
    let recieved = readLine();
    let gussed = readLine();
    console.log(checkMessage(recieved,gussed));
}