let n = 5;
let star = "";
let arr = [];

// for (let i = 0; i < n; i++) {
//     star = star + "*"
//     arr.push(star)
// }

// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i])
// }


let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  console.log(string.trim().length);
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
    string += "\n";
}
console.log(string);
