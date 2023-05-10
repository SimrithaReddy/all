function countStars(st,n){
    let map = new Map()
    let res=0;
    for(let i=0; i<n; i++){
        if(map.has(st[i])){
            res+=map.get(st[i])
            map.set(st[i],1 + map.get(st[i]))
        }
        else{
            res+=0
            map.set(st[i],1 + 0)
        }
    }
    return res;
}

console.log(countStars("abaaba",6))   