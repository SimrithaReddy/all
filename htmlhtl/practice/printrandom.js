let arr = [];

for(let i=0; i<10; i++){
    let temp = Math.floor(Math.random()*10)+1;
    while(arr.indexOf(temp)!=-1 || temp===0) temp = Math.floor(Math.random()*10)+1
    arr.push(temp);
}

console.log(...arr);
