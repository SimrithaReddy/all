function socksPairing(arr,n){
    let map = new Map();
    for(let i=0; i<n; i++){
        if(map.has(arr[i])){
            map.set(arr[i],1+map.get(arr[i]))
        }else{
            map.set(arr[i],1)
        }
    }
    let myArray = Array.from(map.values());
    return myArray;
}

let n = 9;
let arr = [10,20,20,10,10,30,50,10,20]
let res = socksPairing(arr,n)

let sum = 0;

for(let i=0; i<res.length; i++){
    if(res[i]>1){
        res[i] = parseInt(res[i]/2)
        sum = sum + res[i]
    }
}

console.log(sum)