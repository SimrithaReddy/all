let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
function t(friend,time){
    time = time - friend;//12-5=7
    if(time>friend){
        console.log("N")
        time = t(time,friend);
    }
    console.log(time)
    return time;
}
let friend = parseInt(readLine());
let time = parseInt(readLine());
if(time<friend){
    console.log(time);
    console.log(time+1);
}else{
    let ti  = t(friend,time);
    if(ti===friend){
        console.log(friend)
        console.log(friend-1)
    }else{
        let from_down_round = ti+1;
        console.log(friend-from_down_round);
        console.log(friend-from_down_round+1)
    }
}