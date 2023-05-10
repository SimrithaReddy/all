//No.of zeros does a factorial of N contains

let N = 100;
let trailingzeros = 0;
for (let i = 5; i <= N; i = i * 5) {
    trailingzeros = trailingzeros + Math.floor(N / i);
}
console.log(trailingzeros);