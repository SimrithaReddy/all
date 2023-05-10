   class Node{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
    }
   }

   class BinaryTree{
    constructor(){
        this.root=null
    }
    insertLevelOrder(arr,i,n){
        if(i>=n){
            return null
        }
        let tree = new Node(arr[i])
        tree.left=this.insertLevelOrder(arr,2*i+1,n)
        tree.right=this.insertLevelOrder(arr,2*i+2,n)
        return tree;
    }
   }

   function size(tree){
    if(tree==null){
        return 0;
    }
    return size(tree.left)+size(tree.right)+1
   }

   function isIdentical(tree1,tree2){
    if(tree1 == null && tree2 == null){
        return true
    }
    if(tree1 != null && tree2 != null){
        return (tree1.data === tree2.data && isIdentical(tree1.left,tree2.left) && isIdentical(tree1.right,tree2.right))
    }
    else{
        return false
    }
   }

   function maximum(tree){
    if(tree==null) return Number.NEGATIVE_INFINITY
    return Math.max(tree.data,Math.max(maximum(tree.left),maximum(tree.right)));
   }


   function getleftView(tree,map,index){
    if(!tree) return ;
    if(map[index]==undefined){
        map[index]=tree.data
    }
    getleftView(tree.left,map,index+1)
    getleftView(tree.right,map,index+1)
   }

   function leftView(tree){
    let map= new Map();
    getleftView(tree,map,0)
    let arr = []
    let i=0
    while(map[i]!=undefined){
        arr.push(map[i])
        i++
    }
    return arr;
   }

   let arr = [3,4,5,66,8,9,2]
   let arr2 = [3,4,5,6,9,2]
   let tree1 = new BinaryTree();
   let tree2 = new BinaryTree();
   tree1.root=tree1.insertLevelOrder(arr,0,arr.length)
   tree2.root=tree2.insertLevelOrder(arr2,0,arr2.length)
   console.log(isIdentical(tree1.root,tree2.root))
   console.log(leftView(tree1.root))