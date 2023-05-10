let s = "abba"

let set = new Set();
let res = "";

function superReducedString(s) {
    // Write your code here
    let arr = s.split("");
    let t = arr.length
    while(t--){     
     for(let i=0; i<arr.length; i++){
        if(arr[i] == arr[i+1]){
            arr.splice(i,2)
        }
    }
    if(arr.length == 0){
        console.log("")
    }   
    }
    return arr.join("")
}

console.log(superReducedString(s))