let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        // console.log(this.next)
    }
}

// -------- Do NOT edit anything above this line ----------

function getElementAt(qIndex, listHead) {
	let  temp = listHead
	if(listHead == null || qIndex <=0){
		return -1
	}
	for(let i=0; i<qIndex-1; i++){
		temp = temp.next;
		if(temp==null){
			return -1
		}
	}
	return temp.data;
}

// -------- Do NOT edit anything below this line ----------
let numTests = parseInt(readLine());
for (let i = 0; i < numTests; ++i) {
    let listElements = readLine().split(" ");
    let index = parseInt(readLine());
    let head = null;
    if (listElements.length > 0) {

        head = new Node(parseInt(listElements[0]));

        let currNode = head;
        for (let j = 1; j < listElements.length; ++j) {
            // console.log(head)
            currNode.next = new Node(parseInt(listElements[j]));  //currNode.next
            //console.log(currNode.next)
            //console.log(currNode)
            currNode = currNode.next;
           // console.log(head)
            // console.log(currNode)
        }
        console.log(head)
    }
   // console.log(getElementAt(index, head));
}