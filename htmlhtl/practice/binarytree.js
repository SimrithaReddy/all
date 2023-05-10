class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class BinaryTree {
	constructor() {
		this.root = null;
	}
	insertLevelOrder(arr, i, n) {
		if (i >= n) {
			return null;
		}
		if (arr[i] === null) {
			return null;
		}

		let tree = new Node(arr[i]);
		tree.left = this.insertLevelOrder(arr, 2 * i + 1, n);
		tree.right = this.insertLevelOrder(arr, 2 * i + 2, n);
		return tree;
	}

    height(root){
        if(root===null){
            return 0;
        }
        let lh = this.height(root.left);
        let rh = this.height(root.right);
        return 1+Math.max(lh,rh)
    }

	printCurrentLevel(root, level){
		if(root===null){
			return
		}else if(level===1){
			console.log(root.data+" ");
		}else if(level>1){
			this.printCurrentLevel(root.left,level-1);
			this.printCurrentLevel(root.right,level-1);
		}
	}

	maximum(root){
		if(root===null){
			return Number.NEGATIVE_INFINITY;
		}
		return Math.max(root.data,Math.max(
			this.maximum(root.left),this.maximum(root.right)
		))
	}

	size(root){
		if(root==null){
			return 0;
		}

		return this.size(root.left)+this.size(root.right)+1;
	}
}

function convertToNumber(arr) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i] === "N" ? null : parseInt(arr[i])
	}
}

let T = 5;
let arr = [1,2,3,4,5,99,8,67,89,90];
convertToNumber(arr);
let tree = new BinaryTree();
tree.root = tree.insertLevelOrder(arr, 0, arr.length);
console.log(tree.root);
let res = tree.height(tree.root);
console.log(res);
tree.printCurrentLevel(tree.root,res)
let res1 = tree.maximum(tree.root);
console.log(res1);
let res2 = tree.size(tree.root);
console.log(res2);