let n = "786565"

function even(n) {
    if (n == 0) return "";
    else if ((n % 10) % 2 == 0) {
        let res;
        res = even(parseInt(n / 10)) + (n % 10)
        return res;
    } else {
        return even(parseInt(n / 10))
    }
}


let result = even(n)
console.log(result)