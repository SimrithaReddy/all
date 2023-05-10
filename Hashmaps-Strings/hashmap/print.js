let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function printNumbers(st,en){
    let st1 = st;
    if(st<=en){
        if(st==en){
            printnone(st2);
        }
        let st2 = st1+" "+printNumbers(st+1,en);
        return st2;
    }
    function printnone(st2){
        return st2;
    }
}
let t = parseInt(readLine());
while(t--){
    let [st,en] = readLine().split(" ").map(Number);
    let res = printNumbers(st,en);
    console.log(res)
}