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
        let tree = new Node(arr[i]);
        tree.left = this.insertLevelOrder(arr, 2 * i + 1, n);
        tree.right = this.insertLevelOrder(arr, 2 * i + 2, n);
        return tree;
    }
}

function isIdentical(tree1, tree2) {
    // write your code here
    if (tree1 == null && tree2 == null) {
        return true
    }

    if (tree1 != null && tree2 != null) {
        return (tree1.data === tree2.data && isIdentical(tree1.left, tree2.left) && isIdentical(tree1.right, tree2.right))
    } else {
        return false
    }
}


function isLeaf(node) {
    if (node == null)
        return false;
    if (node.left == null && node.right == null)
        return true;
    return false;
}

function leftLeavesSum(node) {

    let res = 0;

    if (node != null) {

        if (isLeaf(node.left))
            res += node.left.data;
        else
            res += leftLeavesSum(node.left);

        res += leftLeavesSum(node.right);
    }

    return res;
}

//add all
function addBT(root) {
    if (root == null)
        return 0;
    return (root.data + addBT(root.left) +
        addBT(root.right));
}

let arr1 = [6,7,8,9,12,2]
let arr2 = [2,4,4,7,8]
let tree1 = new BinaryTree();
tree1.root = tree1.insertLevelOrder(arr1, 0, arr1.length);
let tree2 = new BinaryTree();
tree2.root = tree2.insertLevelOrder(arr2, 0, arr2.length);

console.log(tree1.root)
console.log(tree1)
if (isIdentical(tree1.root, tree2.root)) {
    console.log("True");
} else {
    console.log("False");
}

// let all = addBT(tree1.root);
// let left = leftLeavesSum(tree1.root);
// let right = all-left;
// console.log(right, left,all);
