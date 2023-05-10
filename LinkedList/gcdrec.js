let a = 180, b = 48;

function gcd(a,b){

    if(a==0 && b==0) return "NA"
    else if(a==0) return b;
    else if(b==0) return a;
    else if(a>b) return gcd(b,a%b)
    else return gcd(a,b%a)
}

console.log(gcd(a,b));


/***
 * S.C = O(log(min(a,b)) base 2)
 * T.C = O(log(min(a,b)) base 2)
 */