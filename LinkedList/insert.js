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


class Node{ 
    constructor(value){ 
        this.data = value; 
        this.next = null;
    }
}
class LinkedList{
  
    constructor(self){ 
        this.head = null;
        this.size = 0;
    }
  
    push(newValue){ 
        let newNode =new Node(newValue);
        if (this.head == null){
            this.head = newNode;
            this.tail = newNode;
            return
        }
        this.tail.next = newNode;
        this.tail = newNode;
  
    }
    
    makeListAndPrint(){
        let curr=this.head
        let str=""
        for(let i=0;i<this.size;i++) {
            str=str+curr.data+" ";
            curr=curr.next
        }
        console.log(str)
    }


    insertAtBeginning(element){
        let node = new Node(element);
        if(this.head== null){
            this.head = node;
            this.head.next = null;
        }else{
            let curr = this.head;
            node.next = curr;
            this.head = node;
        }
        // console.log(this.head)
        this.size++;
    }

    insertAtEnd(val){
        let node = new Node(val);
        let curr = this.head;
        while(curr.next!=null){
            curr = curr.next
        }
        curr.next = node;
        this.size++;
    }


    read_list_input(){
        this.head = null;
        let values = readLine().split(" ")
        // console.log(values.length)
        for(let i=0; i<values.length-1; i=i+2){
            if(values[i+1]==0){
                let v = parseInt(values[i])
               this.insertAtBeginning(v)
            }else{
                let v = parseInt(values[i])
                this.insertAtEnd(v)
            }
        }
        this.makeListAndPrint()
    }
       
}



let testCases = parseInt(readLine());
for(let i=0;i<testCases;i++){
    // console.log(i)
    let linkedList= new LinkedList(); 
    // linkedList.size = 0;
    linkedList.read_list_input();
}