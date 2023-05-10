//To get prime divisors

let N= 200;
for(let i=2; i<=N; ++i){
    if(N%i==0) {
        while(N%i==0){
            console.log(i)
            N= N/i
        }
    }
}
if(N!=1){
    console.log(N)
}