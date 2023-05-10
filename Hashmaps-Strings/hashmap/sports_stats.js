let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let n = parseInt(readLine());
let map = new Map();
let alreadyMap = new Map();

for(let i=0; i<n; i++){
	let[name,game] = readLine().trim().split(" ");
        if(!alreadyMap.has(name)){
            if(map.has(game)){
		    map.set(game, 1+map.get(game));
        }else{
            map.set(game,1+0)
	    }
	    alreadyMap.set(name,true);
    }
}

let maxLikes = Math.max(...map.values());
let favSport = [];

for(let m of map){
	if(m[1]===maxLikes){
		favSport.push(m[0]);
	}
}

favSport.sort();
console.log(favSport[0]);


console.log(map.has("football")?map.get("football"):0);