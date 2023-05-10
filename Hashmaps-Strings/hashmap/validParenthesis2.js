function longestValidParenthesis(str){
    let MaxLen = 0, open =0, close =0 ;
    for(let i=0; i<str.length; i++){
        if(str[i]==="("){
            open++;
        }else{
            close++;
        }
        if(open==close){
            MaxLen = Math.max(MaxLen,2*open)
        }else if(close>open){
            open = close = 0;
        }
    }

    open = close = 0;
    for(let i=str.length-1; i>=0; i--){
        if(str[i]==="("){
          open++;
           }else{
            close++;
        }
        if(open==close){
             MaxLen = Math.max(MaxLen,2*open)
        }else if(open>close){
           open = close = 0;
        }
    }

    return MaxLen
}

let str = "()(()())()()())()()()()()()()()()()"
let str1 = "(((((())"
let str3 = "()()))))(()()()"
console.log(longestValidParenthesis(str));
console.log(longestValidParenthesis(str1))
console.log(longestValidParenthesis(str3))