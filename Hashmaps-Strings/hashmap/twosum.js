function findSumPairs(arr,sum){
    let set = new Set();
    console.log(set)
    for(let i=0; i<arr.length; i++){
        // console.log(i)
        // console.log(set)
        if(set.has(sum-arr[i])){
            // console.log(set)
            console.log(arr[i],sum-arr[i]);
            break;
        }else{
            set.add(arr[i])
            // console.log(set)
        }
    }
}

findSumPairs([3,5,6,7,3,8,2],10)