let arr = [2,4,5,6,7,55,5,6,6,6,5,5,5,5,5,5];
arr.sort((a,b)=>a-b);
console.log(...arr)
let Maxcount = 1, res = arr[0];
let count = 1;
for (let i = 0; i < arr.length; i++) {
    if(arr[i]===arr[i+1]) count++;
    else if(count>Maxcount){
        Maxcount = count;
        res=arr[i];
        count=1;
    }
    else count=1;
}

console.log(Maxcount,res)