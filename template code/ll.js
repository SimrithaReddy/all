class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

function length(head){
    let temp = head;
    let len = 0;
    while(temp!=null){
        len++;
        temp=temp.next
    }
    return len;
}

function printlist(head){
    let temp = head;
    let res="";
    while(temp!=null){
        res=res+temp.data+" ";
        temp=temp.next
    }
    return res;
}

function nthNode(head,n){
    let temp = head;
    let len = length(head)
    if(n<=0 || n>len) return -1
    for(let i=1; i<n; i++){
        temp=temp.next;
    }
    return temp.data
}


let n= 5;
let arr = [2,5,99,98,535]
let res = new Node(arr[0]);
let curr = res
for(let i=1; i<n; i++){
    curr.next=new Node(arr[i]);
    curr=curr.next;
}
console.log(res)
console.log(printlist(res))
console.log(length(res))
console.log(nthNode(res,2))