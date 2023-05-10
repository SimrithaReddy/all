

function count1(str){
    let map = new Map()
    // let ch;
    let max = Number.NEGATIVE_INFINITY;
    for(let i=0; i<str.length; i++){
        map[str[i]]++;
        if(map[str[i]]>max){
            // ch = str[i]
            max= map[str[i]]
        }
    }
    console.log(max)
    // console.log(ch)
}


let str = "missisipie";
count1(str);