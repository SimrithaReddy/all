function pangrams(s) {
    // Write your code here
    s = s.toLowerCase();
    let str = "abcdefghijklmnopqrstuvwxyz"
    let alpha = str.split("")
    for(let i=0; i<s.length; i++){
        let a = s[i];
        let index = alpha.indexOf(a)
        if(index!==-1){
            alpha.splice(index,1)
        }
    }

    if(alpha.length==0){
        return true
    }
    return false


}


let s = "We promptly judged antique ivory buckles for the next prize"
console.log(pangrams(s))