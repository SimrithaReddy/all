function palindrome(str){
    let i = 0;
    let j = str.length-1;;
    while(i<j){
        if(str[i]!=str[j]){
            return false;
        }
        i+=1;
        j=j-1;
    }
    return true;
}



let str = "simrmis"
console.log(palindrome(str))