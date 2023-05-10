function rec(n){
    let res = n + " ";
    if(n<=0){
        return "";
    }else{
        return res  + rec(n-1) + res
    }
}
console.log(rec(5))
