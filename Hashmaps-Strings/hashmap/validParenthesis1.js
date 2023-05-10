function longestValidParenthesis(str){
    let maxLen = 0;
    let arr = [];
    arr.push(-1);
    for(let i=0; i<str.length; i++){
        if(str[i]==="("){
            arr.push(i)
        }else{
            arr.pop();
            if(arr.length==0){
                arr.push(i);
            }else{
                maxLen = Math.max(maxLen,i-arr[arr.length-1]);
            }
        }
    }
    return maxLen;
}



let arr1 = "()(())))()()()((((()))))))"
console.log(longestValidParenthesis(arr1))

let arr2 = ")(()"
console.log(longestValidParenthesis(arr2))



/**  
 * Dry Run---->
 * 
 *  (  )  (  (  )  )  )  )  )
 *  0  1  2  3  4  5  6  7  8
 *  
 *  MaxLen = 0
 * 
 *  i     str[i]       arr                    arr[arr.length-1]             MaxLen
 *  0      (         [-1,0]
 *  1      )                      [-1]         0,1-arr[1-1] 0,2                2
 *  2      (         [-1,2]            
 *  3      (         [-1,2,3]          
 *  4      )                     [-1,2]       2,4-arr[2-1]=2,2                  2
 *  5      )                     [-1]         2,5-arr[1-1]=2,5-(-1)=6           6
 *  6      )                     [6]         
 *  7      )
 * 
 * 
 * 
 */