class Node{
    constructor(element){
        this.data = element;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    printList(){
        let temp = this.head;
        while(temp!==null){
            console.log(temp.data)
            temp = temp.next
        }
    }

    insertAtBeginning(element){
        let node = new Node(element);
        if(this.head==null){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    insertAtEnd(val){
        let value = new Node(val);
        if(this.head==null){
            this.head = value;
        }else{
            let temp = this.head;
            while(temp.next!=null){
                temp = temp.next;
            }
            temp.next = value;
            this.size++;
        }
    }

    insertAtPos(element,pos){
        let ele = new Node(element);
        let curr = this.head;
        let prev = null;
        if(pos==0){
            ele.next = this.head;
            this.head = ele;
        }else{
            let i = 0;
            while(i<pos){
                prev = curr;
                curr = curr.next;
                i++;
            }
            prev.next = ele;
            ele.next = curr;
        }
        this.size++;
    }

    removeAtBeggining(){
        let curr = this.head;
        this.head = this.head.next;
        curr.next = null;
        this.size--;
    }

    removeAtEnd(){
        let curr = this.head;
        let prev = null;
        while(curr.next!=null){
            prev = curr;
            curr = curr.next;
        }
        prev.next = null;;
        this.size--;
    }

    removeAtPos(pos){
        let curr = this.head;
        let prev = null;
        if(pos==0){
            this.head = this.head.next;
            curr.next = null;
        }else{
            let i = 0;
        while(i<pos-1){
           // console.log(i,curr,"I am from Remove AT pos Function")
            prev = curr;
            curr = curr.next;
            i++;
        }
        prev.next = curr.next;
        curr.next = null;
        }
        this.size--
    }

    getMiddleElement(){
        let slow = this.head;
        let fast = this.head;

        while(fast!=null && fast.next!==null && fast.next.next!==null){
            slow = slow.next;
            fast = fast.next.next;
        }
        
        return slow.data;
    }


    detectLoop(){
        let curr = this.head;
        let set = new Set();

        while(curr!==null){
            if(set.has(curr.data)==true){
                return 1;
            }
            set.add(curr.data);
            curr = curr.next
        }
       // console.log(set)
        return 0;
    }

    FloydCycleDetectLoop(){
            let fast = this.head;
            let slow = this.head;
    
            while(fast!==null && fast.next!==null){
                slow = slow.next;
                fast = fast.next.next;
                if(slow == fast){
                    return 1;
                }
            }
    
            return 0;
    }

}


let L1 = new LinkedList();
let arr = [1,2,3,4,5];
for(let i=0; i<arr.length; i++){
    L1.insertAtEnd(arr[i]);
}
L1.printList();
