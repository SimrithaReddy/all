let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
class CarSell{
    constructor(a,i){
        this.amount = a;
        this.index = i;
    }
    getPromisingOffers=function(){
        let desired_rate = (90*1000000)/100
        if(this.amount>=desired_rate){
            return this.index;
        }else{
            return -1;
        }
    }
}

let n = parseInt(readLine());
let arr =[];
for(let i=0; i<n; i++){
    let amount = new CarSell(parseInt(readLine()),i);
    let offers = amount.getPromisingOffers();
    if(offers>=0){
        arr.push(offers)
    }
}

if(arr==0){
    console.log(-1)
}else{
    for(i=0; i<arr.length;i++){
        console.log(arr[i])
    }
}