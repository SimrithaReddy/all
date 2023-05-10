let n = 5;
function sumRec(n){
    let sum =  n;
    if(n==0){
        return 0;
    }else{
        let res = sum + sumRec(n-1)
        return res;
    }
}

console.log(sumRec(n))



function productRec(n){
    let pro = n;
    if(n==0){
        return 1;
    }
    return pro * productRec(n-1)
}

console.log(productRec(5))