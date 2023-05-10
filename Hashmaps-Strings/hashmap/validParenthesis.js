/**
 * Example 1: 
 * Input: ()(())))
 * Output: 6
 * Explantion : ()(())
 * 
 * Example 2: 
 * Input: ()))
 * Output: 1
 * Explantion : ()
 *
 * Example 3: 
 *Input: ((()
 * Output: 1
 * Explantion : ()
 * 
 * Example 4: 
 * Input: )()()))
 * Output: 4
 * Explantion : ()()
 */

// Brute Force Approach


function isBalanced(str){
    let arr = [];
    for(let i=0; i<str.length; i++){
        if(str[i]==="("){
            arr.push(str[i])
        }else{
            if(arr.length!==0){
                arr.pop();
            }else{
                return false;
            }
        }
    }

    if(arr.length==0){
        return true;
    }

    return false;
}


function longestValidParenthesis(str){
    let maxLen = 0;
    for(let i=2; i<str.length; i+=2){
        for(let j=0; j<=str.length-i; j++){
            let val = str.substr(j,i) // 0,2 
            let isValid =isBalanced(val)
            if(isValid){
                maxLen = Math.max(maxLen, val.length)
                if(maxLen==val.length){
                    break;
                }
            }
        }
    }
    return maxLen
}

let arr1 = "()(())))"
console.log(longestValidParenthesis(arr1))

let arr2 = ")()"
console.log(longestValidParenthesis(arr2)) //i=2 j=0