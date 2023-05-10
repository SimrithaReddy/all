let str = "this i$ welcome";

for(let i=0; i<str.length; i++){
    let aV=str[i].charCodeAt(i);
    console.log(aV,str[i])
    // if(str[i]==" "){
    //     str[i-1].toUpperCase();
    //     str[i+1].toUpperCase();
    // }
    // else if(!(aV>64&&aV<91)|| !(aV>96&&aV<123)){   
    //     str=str.substring(0,i)+str.substring(i+1,str.length);   
    // }
}

console.log(str[1].charCodeAt(1));
str[0].toUpperCase();
str[str.length-1].toUpperCase();
console.log(str);