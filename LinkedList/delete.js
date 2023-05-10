let fs = require("fs");
 let data = fs.readFileSync(0, 'utf-8');
 let idx = 0;
 data = data.split('\n');
 
 function readLine() {
     idx++;
     return data[idx - 1];
 }
 
 // -------- Do NOT edit anything above this line ----------
 // Use readLine() for taking input, it will read one line of from the input and is stored in string format 
 
 
 class Node{ 
     constructor(value){ 
         this.data = value; 
         this.next = null;
     }
 }
 class LinkedList{ 
   constructor(){ 
       this.head = null;
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
     }   

     printLL(head){
      //console.log(head)
      let temp = head;
      console.log(temp)
      let res = "";
      while(temp !== null){
          res = res+ temp.data + " ";
          temp = temp.next;
      }
      console.log(res);
  }

     deleteDuplicates(){
      let temp = this.head;
      let curr = this.head;
      let prev = curr.next;
      let set = new Set;

      if(curr==null){
        return curr;
      }else{
        while(curr!=null){
          if(set.has(curr.data)){
            prev.next = curr.next;
            curr = prev.next;
          }else{
            set.add(curr.data);
            prev = curr;
            curr = curr.next;
          }
        }
      }
      // console.log(temp)
      return temp;
     }
 }
 
 function readListInput(){
     let vals = readLine().split(" ");
     let linkedList = new LinkedList(); 
     for(let val of vals){
         linkedList.push(val);
     }
     return linkedList;
 }
 
//  function printLL(head){
//      //console.log(head)
//      let temp = head;
//      let res = "";
//      while(temp !== null){
//          res += temp.data + " ";
//          temp = temp.next;
//      }
//      console.log(res);
//  }
 
 let n = parseInt(readLine());
 let linkedList = readListInput();
 linkedList.deleteDuplicates()
linkedList.printLL();
     