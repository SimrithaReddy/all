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
        this.data = value; 
        this.next = null;
    }
}
class LinkedList{
  
    constructor(self){ 
        this.head = null;
        this.size=0
    }
    appendAtTail(value){
        let node=new Node(value)
        if(this.head==null) this.head=node 
        else{
           let current=this.head
           while(current.next)current=current.next
           current.next=node
        }
        this.size++
    }
    appendAtHead(value){
        let node =new Node(value)
        if(this.head==null) this.head=node
        else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    printList(){
        let temp=this.head
        let str=""
        for(let i=0;i<this.size;i++) {
            console.log(str)
            str=str+temp.data+" "
            temp=temp.next
        }
        return str 
    }
    
            
}
let testCases = parseInt(readLine());
for(let i=0;i<testCases;i++){
    let array = readLine().split(" ")
    let ll=new LinkedList()
    let posArr=array.filter((ele,ind)=>{
        return ind%2
    }) 
    let nodeArr=array.filter((ele,ind)=>{
        return ind%2==false 
    })
    for(let i=0;i<nodeArr.length;i++){
        if(posArr[i]==1) ll.appendAtTail(nodeArr[i])
        else ll.appendAtHead(nodeArr[i]) 
    }
    console.log(ll.printList())    
}