function countDistinctElements(arr,k){
    let map = new Map();
    //setting up of Window
    for(let i=0; i<k; i++){
        if(map.has(arr[i])){
            map.set(arr[i],map.get(arr[i])+1);
        }else{
            map.set(arr[i],1)
        }
    }
    // console.log(map)
    // console.log(map.size);
    for(let i=k; i<arr.length; i++){
        //removal of 1st elemnt of previous window from this window
        if(map.get(arr[i-k]) == 1){       //i=4 arr[4-4]=1===2
            map.delete(arr[i-k]);
        }else{
            map.set(arr[i-k],map.get(arr[i-k])-1); //1->1
        }
        //inclusion of new element into this window
        if(map.has(arr[i])){
            map.set(arr[i],map.get(arr[i])+1);
        }else{
            map.set(arr[i],1);
        }
        console.log(map)
        console.log(arr)
        // console.log(map.size)
    }
}
let arr=[1,2,1,3,4,2,3], k=4;
countDistinctElements(arr,k)

/**
 * 
 */