function f(a, b, c) {
	m = ["1", "2", "3"];
	a = 3;       
	b[0] = "X";
	c.first = false;
}

var x = 4;
var y = ["A", "B", "C"];
var z = { first: true };

f(x, y, z);
console.log(x, y, z);

function g(a) {                //a=z
	a = { first: true };                     //
	console.log(a);
}

g(z);
console.log(z);

function k(){
	myvar = 23
	console.log(x);
}

k()



let abc = BigInt("12345678987654323451444")
console.log(abc);


const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.splice(1,1);
console.log(citrus);

let words = "10X Academy Institute"
  
    const animateAll = (animate1) => {
        setTimeout(() => {
            animate1(words.split(" ")[0]);
            setTimeout(() => {
                animate1(words.split(" ")[1]);
                setTimeout(() => {
                    animate1(words.split(" ")[2]);
                }, 1000)
            }, 1000)
        }, 1000)
    }
  
    
  
    animateAll(animate1);

function animate1(word){
	console.log(word);
}

function print(nameofcb){
	// console.log(nameofcb);
	return nameofcb;
}

function printName(print){
	console.log("Hello "+ print("Simritha"))
}

printName(print)

function lex(){
	let abcd = 49
	function nest(){
		console.log(abcd +" " + klm);
	}
	nest()
}

let klm = 98
lex();