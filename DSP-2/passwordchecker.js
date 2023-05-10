function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    let count = 4;
    let strength = { caps: false, small: false, numbers: false, special: false };
    for (let i = 0; i < n; i++) {
        let char = password.charCodeAt(i);
        if (!strength.caps && char >= 65 && char <= 90) {
            strength.caps = true;
            console.log("caps");
            count--
        } else if (!strength.numbers && char >= 48 && char <= 57) {
            strength.numbers = true;
            console.log("numbers");
            count--
        } else if (!strength.small && char >= 97 && char <= 122) {
            strength.small = true;
            console.log("small");
            count--
        } else if (!strength.special && ((char == 33) || (char >= 35 && char <= 38) ||
            (char >= 40 && char <= 43) || (char == 45) || (char == 64) || (char == 94))) {
            strength.special = true;
            console.log("special");
            count--
        }
    }

    if (n + count < 6) {
        count = 6 - n
    }

    return count;
}

const special = '!@#$%^&*()-+'

let password = "abcde"
let n = password.length;
console.log(minimumNumber(n, password));