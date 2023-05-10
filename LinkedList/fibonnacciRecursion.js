let n = 5
function fibonacci(n){

   if(n==1) return 0
   if(n==2) return 1

   fibonacci(n-1) + fibonacci(n-2) 
}

console.log(fibonacci(n))