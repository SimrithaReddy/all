function reverse(string1){
    let arr =[];
    for(let i=0; i<string1.length; i++){
        arr[i] = string1[string1.length-1-i]
    }
    let res = arr.join("")
    return res;
}

let string1 = "abc";
console.log(reverse(string1));