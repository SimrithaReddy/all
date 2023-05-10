function secondLargest(arr,n){
    if(n==2){
        let mini = Math.min(arr[0],arr[1]);
        return mini;
    }
    if(n==1){
        return arr[0];
    }
    arr.sort();
    return arr[n-2]
}

let arr = [89,-10,45]
let n = 3;
console.log(secondLargest(arr,n))