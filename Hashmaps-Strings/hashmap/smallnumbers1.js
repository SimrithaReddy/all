function smallnumbers(arr,n){
    let count_arr = [];
    for(let i=0; i<n; i++){
        let count=0;
        for(let j=0; j<n; j++){
            if(arr[i]>arr[j]){
                count+=1;
            }
        }
        count_arr.push(count)
    }
    return count_arr;
}


let arr = [8,1,2,2,3]       //[4,0,1,1,3]
console.log(smallnumbers(arr,5))