function firstMaxCount(arr,n){
    let map = new Map();
    for(let i=0; i<arr.length; i++){
        if(map.has(arr[i])){
            if(map.get(arr[i])==n-1){
                return arr[i]
            }
            map.set(arr[i],map.get(arr[i])+1)
        }
        else{
            map.set(arr[i],1)
        }
    }
    return 0;
}

let arr = [3,9,2,2,2,7,8,3,3,2,2];
let n = 4;
console.log(firstMaxCount(arr,n))