let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

function print(s, n,l,r){

    let count = 0;
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            let mul = s[i]*s[j]
            if(mul>l || mul==l){
                if(mul<r || mul==r){
                    count++;
                }
           }
        }
    }
    console.log(count)

}




let [N,L,R] = readLine().split(" ").map(Number);
let a = readLine().split(" ").map(Number);
print(a, N, L, R)