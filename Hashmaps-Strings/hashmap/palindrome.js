
function checkPalindrome(name_palindrome){
    let map = new Map();
    for(let i=0; i<name_palindrome.length; i++){
        if(map.has(name_palindrome[i])){
            map.set(name_palindrome[i],1+map.get(name_palindrome[i]))
        }else{
            map.set(name_palindrome[i],1+0)
        }
    }

    let unpaired = 0;
    // console.log(map)
    for(let element of map){
        if(element[1]%2!==0){
            unpaired++;
        }
    }

    if(unpaired===0){
        return 0;
    }else{
        return unpaired-1;
    }

}


let name_palindrome = "radara";
// console.log(name_palindrome.length)
console.log(checkPalindrome(name_palindrome))