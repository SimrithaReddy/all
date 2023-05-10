class Node{
    constructor(data){
        this.data=data
        this.next = null;
    }
}


class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }

    printList(){
        let temp = this.head;
        let res = "";
        while(temp!=null){
            res=res+temp.data+" ";
            temp=temp.next;
        }
        console.log(res);
    }

    insert(data){
        let value = new Node(data)
        if(this.head==null){
            this.head=value;
        }else{
            let temp=this.head;
            while(temp.next!=null){
                temp=temp.next
            }
            temp.next=value;
            this.size++;
        }
        this.size++;
    }

    insertLL(data){
        let temp=this.head;
        while(temp.next!=null){
            temp=temp.next
        }
        temp.next=data;
        this.size++;
    }
}

function interLeave(L1,L2){
    var p_curr = L1.head, q_curr = L2.head; 
    var p_next, q_next; 
    let tmp;
  
    // While there are available positions in p 
    while (p_curr != null &&  q_curr != null) 
    { 
        p_next = p_curr.next; 
        q_next = q_curr.next; 
        
        q_curr.next = p_next; 
        p_curr.next = q_curr;

        //setting next pointers
        p_curr = p_next; 
        q_curr = q_next;
    } 
    
    if(q_curr!=null){
        L1.insertLL(q_curr);
    }
    L1.printList();
}


function mergeLists(headA, headB){
    //imlpement this function
    if(headA == null){
        return headB
    }

    if(headB == null){
        return headA
    }
    
    if(headA.data < headB.data){
        headA.next = mergeLists(headA.next, headB);
        return headA;
    }else{
        headB.next = mergeLists(headB.next, headA);
        return headB;
    }
}

function printList(head){
    let temp = head;
    let res = "";
    while(temp!=null){
        res=res+temp.data+" ";
        temp=temp.next;
    }
    console.log(res);
}

let arr = [17,20,30,40,50];
let L1 = new LinkedList();
for(let i=0; i<arr.length; i++){
    L1.insert(arr[i])
}
let arr2 = [11,12,14,16,17,18,19,20];
let L2 = new LinkedList();
for(let i=0; i<arr2.length; i++){
    L2.insert(arr2[i])
}
console.log("Interleave two Linked Lists")
// interLeave(L1,L2);
let res = mergeLists(L1.head,L2.head);
console.log(res);

printList(res);
printList(L1.head)
printList(L2.head)