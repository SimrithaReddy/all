function camelcase(s) {
    // Write your code here
    let count = 1;
    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) > 64 && s.charCodeAt(i) < 91) {
            count++;
        }
    }
    return count;

}

let s = "saveChangesInTheEditor"
// console.log(s.charCodeAt(0))
console.log(camelcase(s))