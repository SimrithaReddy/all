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

function makePalindrome(st,n){
	if(st.length===1){
		return st;
	}
	let stPalindrome = st
	if(n==0){
		for(let i=st.length-1; i>=0; i--){
			stPalindrome=stPalindrome+st[i];
            // console.log(stPalindrome)
		}
        return stPalindrome;	
	}else{
		for(let i=st.length-2; i>=0; i--){
			stPalindrome=stPalindrome+st[i];
		}
        return stPalindrome;
	}
}

let st = readLine();
let n = parseInt(readLine());
let palindrome = makePalindrome(st,n);
console.log(palindrome);