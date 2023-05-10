function reverse_Each(str){
    let i= 0 , j=str.length;
    let arr = str.split("");
    while(i<j){
        let tmp = arr[i]
        arr[i]=arr[j]
        arr[j] = tmp;
        i++;
        j--;
    }
    //console.log(arr.join(""))
    return arr.join("");
}

function string(str){
    let arr = str.split(" "); // wel to 10x
    let res = ""
    for(let j=0; j< arr.length; j++){
        res = res+reverse_Each(arr[j])+" ";
    }
    console.log(res)
}

let str = "Welcome to 10X"
string(str);