let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
  idx++;
  return data[idx - 1].trim();
}
class Node{
     constructor(value){
        this.data=value
        this.next=null
     }
}
class LinkedList{
    constructor(){
        this.head=null
        this.size=0
        this.tail = null;
    }
    
    push(new_value){ 
        let new_node = new Node(new_value)
        if(this.head === null){
            this.head = new_node;
            this.tail = new_node;
            return
        }
        this.tail.next = new_node;
        this.tail = new_node; 
        this.size++;
    }
    deleteDup(){
        // console.log(this.head)
        let prev=this.head
        let temp=prev.next
        while(prev.next!=null){
            if(temp.data==prev.data){
               prev.next=temp.next
               temp=prev.next
               this.size--
            }
            else{
                prev=prev.next
                temp=temp.next
            }
        }
        return this.head;
    }
}

function printList(head){
    console.log(head)
    let temp=head
    let str=""
    for(let i=0;i<15;i++) {
        // console.log(str)
        str=str+" "+ temp.data
        temp=temp.next
    }
    console.log(str)
    return str 
}


let n=parseInt(readLine())
let ll=new LinkedList()
let arr=readLine().split(" ").map(Number)
for(i=0;i<n;i++) ll.push(arr[i])
let c = ll.deleteDup()
console.log(c)
printList(c)