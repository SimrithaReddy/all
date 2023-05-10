let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readline() {
  idx++;
  return data[idx - 1].trim();
}
let n=readline().split("");

let product=1;
let sum=0;// Split is used to split terms.There is no space in split braces means
//it splits the term where there are no space