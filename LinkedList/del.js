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


// javascript program to detect loop in the linked list 

// Node class 
class Node{ 

	// Constructor to initialize the node object 
	constructor(data){ 
		this.data = data; 
		this.next = null;
  }
}
class LinkedList{
  // Function to initialize head 
    constructor(){ 
        this.head = null;
    }
// Do not change anything above this line
    deleteNode(position){ 
        // YOU ONLY NEED TO COMPLETE THIS FUNCTION.
        let curr = this.head
        let prev = curr;
        let len = this.lengthLlist()
        if(position===0){
            this.head=curr.next
        }
        else if(position>=len){
            return
        }
        else{
            for(let i=1; i<=position; i++){
                if(i===position){
                    curr.next=prev.next.next
                }
                curr=curr.next;
                prev=curr
            }
        }
        
    }

    lengthLlist(){
        let length = 0;
        let current = this.head;
        while(current){
            current = current.next;
            length = length + 1;
        }
        return length;
    }
  
  
    //Utility function to print the linked LinkedList 
    printList(){ 
        let temp = this.head; 
        let res = "";
        while(temp){ 
            res=res+temp.data+" "
            temp = temp.next;
        }
        console.log(res)
    }
}

// Do not change anything below this line
function convertToNumber(list){
  for(let value of list){
    value=parseInt(value);
  }
  return list;
}


  let n = parseInt(readLine());

    // Start with the empty list 
    let llist =new  LinkedList(); 

    temp = readLine().split(" ");
    convertToNumber(temp);
    let curr 
    if(n<1){
        llist.head = null;
    }
    else if(n<2){
        llist.head =new Node(temp[0]);
    }
    else{
        llist.head =new Node(temp[0]);
        let second =new Node(temp[1]);
        llist.head.next = second;
        curr = llist.head.next;
    }


    for(let i=2;i<n;i++){
        let t =new Node(temp[i]);
        curr.next = t;
        curr = curr.next;
    }
    let pos = parseInt(readLine());
    llist.deleteNode(pos);
    llist.printList();