let str = ["znglish","`mkk", "Kljhjh", "344ggss"];
let count = 0;
for(let i=0; i<str.length; i++){
    str[i] = str[i].toLowerCase();
    let res = str[i].charCodeAt(0)
    if(res<123 && res>96) console.log(str[i]),count++;
}
console.log(count);

let val = 22229600;
let res = String.fromCharCode(val)
console.log(res);