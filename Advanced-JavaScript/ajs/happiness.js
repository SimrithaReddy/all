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
function maxHapiness(n){
    let map = new Map();
    let sum = 0;
    let happiness = 0, max1 = Number.NEGATIVE_INFINITY, max2;
    while(n--){
        let [h,a] = readLine().split(" ").map(Number);
        sum = sum + a;
        map.set(h,a);
        if(h>max1){
            max2 = max1;
            max1 = h;
        }else if(max1>= h && h >= max2){
            max2 = h;
        }
    }
    happiness = max1+max2-sum;
    if(map.get(max1) && map.get(max2)){
        happiness = happiness+map.get(max1)+map.get(max2)
    }
    console.log(happiness)
}
let t = parseInt(readLine());
while(t--){
    let n = parseInt(readLine());
    maxHapiness(n)
}