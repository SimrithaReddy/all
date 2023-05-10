let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format 


// JS program to delete M nodes after N nodes 
  
// Node class  
class Node{
  
    //Constructor to initialize the node object 
    constructor(data){
        this.data = data; 
        this.next = null;
    }
}
class LinkedList{ 
  
    // Function to initialize head 
    constructor(){ 
        this.head = null;
		this.size = 0;
    }
    // Function to insert a new node at the beginning 
    push(newData){ 
        let newNode = new Node(newData); 
        newNode.next = this.head; 
        this.head = newNode; 
		this.size++;
    }
    // Utility function to prit the linked LinkedList 
    printList(){ 
        let temp = this.head;
        let res= "";
        while(temp){ 
            res = res+ temp.data+" "
            // console.log (temp.data+ ' '); 
            temp = temp.next
        }
        console.log(res)
    }
    skipMdeleteN(M,N) {
        let curr = this.head;
        let prev= null;
  
        while (curr != null) {
            for(let i=0; i<M && curr!=null; i++){
                prev = curr;
                curr = curr.next;
            }
            // console.log(prev)
            if(curr==null){
                return
            }

            // let temp = curr
            for(let j=0; j<N && curr!==null; j++){
                // console.log(j)
                curr = curr.next
            }
        

            // console.log(curr,"I am curr")
            // curr = temp.next
            prev.next = curr;
            // console.log(prev)
        }
    } 
          
}

// Driver program to test above function 
  

let n = parseInt(readLine());
let input = readLine().split(" ");
let M = parseInt(input[0]);
let N = parseInt(input[1]);
let llist = new LinkedList(); 
let ar=readLine().split(" ").map(Number);
l = ar;
l.reverse();
for(i of l){
    llist.push(i);
}
llist.skipMdeleteN(M,N) ; 
llist.printList();