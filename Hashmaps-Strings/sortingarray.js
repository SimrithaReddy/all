let arr = [10,9,6,7,3]
let n = 2;
for(i=0; i<arr.length; i++){
    for(j=i+1; j<arr.length; j++){
        if(arr[i]>arr[j]){
            tmp = arr[i]
            arr[i] = arr[j]
            arr[j] = tmp
        }
    }
}
console.log(arr)