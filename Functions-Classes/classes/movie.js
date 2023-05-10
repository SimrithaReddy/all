let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

// Define your class here
// your class name should be 'Movie' and  method name as 'run'
class Movie{
	constructor(lengthInMinutes,numCharacters,la){
        console.log(la)
		this.lengthInMinutes=lengthInMinutes
		this.numCharacters=numCharacters
		this.language=la
        console.log(la)
	}
	run=function(){
        return "This is a "+this.language +"movie with "+this.numCharacters+" characters and is "+this.lengthInMinutes + " minutes long."
}
}

// DO NOT CHANGE ANYTHING BELOW THIS LINE

let language = readLine();
let numCharacters = readLine();
let lengthInMinutes = readLine();

let movie =  new Movie(lengthInMinutes, numCharacters, language)
console.log(movie.run());