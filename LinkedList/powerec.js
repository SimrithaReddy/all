let x = 2, n = 6;

function pow(x,n){

    if(n==0) return 1;
    return x*pow(x,n-1)
}

console.log(pow(x,n));

/**
 * T.C = O(n)
 * S.C = O(n)
 */

function powhalf(x,n){

    if(n==0) return 1;
    let y = pow(x,n/2);
    
    if(n%2==0) return (y*y)
    else return (x*y*y)
}

console.log(powhalf(x,n))

/**
 * T.C = O(logn base 2)
 * S.C = O(logn base 2)
 */