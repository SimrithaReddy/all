let msg = "SOSGOSOSOSOS"

function marsExploration(s) {
    // Write your code here
    let count = 0;
    let i = 0;
    while(i<s.length){
        if(s[i]!=="S"){
            count++;
        }
        if(s[i+1]!=="O"){
            count++;
        }
        if(s[i+2]!=="S"){
            count++;
        }
        i=i+3;
        // console.log(i);
    }
    return count;

}

console.log(marsExploration(msg))