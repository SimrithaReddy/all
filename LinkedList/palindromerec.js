let str = "Dhhhhhhhd"
function check(str, i, j){
    if(i>j){
        return true;
    }

    if(str[i]==str[j]) {
       return check(str,i+1,j-1)
    } else{
        return false;
    }

}

let res = check(str, 0, str.length-1)
console.log(res)

//Case Sensitive
/**
 * T.C = O(n/2) = O(n)
 * S.C = O(n/2) = O(n)
 */