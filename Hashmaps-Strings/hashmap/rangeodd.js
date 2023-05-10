function oddtimes(arr,n){
    let set = new Set();
    for(let i=0; i<2*n+1; i++){
        if(set.has(arr[i])){
            set.delete(arr[i])
        }else{
            set.add(arr[i])
        }
    }
    return set;
}

let arr = [1,2,3,2,1]
let n = 5;
let res = oddtimes(arr,n);

for(let each of res){
    console.log(each)
}