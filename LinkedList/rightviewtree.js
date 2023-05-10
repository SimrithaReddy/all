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
        if (i >= n || arr[i] === null || arr[i] === NaN) {
            return null;
        }
        let tree = new Node(arr[i]);
        tree.left = this.insertLevelOrder(arr, 2 * i + 1, n);
        tree.right = this.insertLevelOrder(arr, 2 * i + 2, n);
        return tree;
    }
}


function getrightView(root, map, index) {
    if (!root) {
        return;
    }
    if (map[index] === undefined) {
        map[index] = root.data;
    }
    getrightView(root.right, map, index + 1);
    getrightView(root.left, map, index + 1);
}


function printRightView(root) {
    // write code here
    let map = new Map();
    getrightView(root, map, 0)
    let j = 0;
    let result = [];
    while (map[j] !== undefined) {
        result.push(map[j]);
        j++;
    }
    console.log(...result);
}

//add all
function addBT(root) {
    if (root == null)
        return 0;
    return (root.data + addBT(root.left)+
    addBT(root.right));
}

function rightAdd(root){
    
    if(root==null || root.right==null || root.left == null){
        return 0;
    }

    return (root.right.data + rightAdd(root.right) + rightAdd(root.left))

}


function findLargestSubtreeSumUtil(root) {
    if (root == null)
        return 0;
    let currSum = root.data +
        findLargestSubtreeSumUtil(root.left) +
        findLargestSubtreeSumUtil(root.right);

    v = Math.max(v, currSum);

    return currSum;
}

function findLargestSubtreeSum(root) {
    if (root == null)
        return 0;

    v = -9999999;
    findLargestSubtreeSumUtil(root);

    return v;
}


function sumOfParentOfX(root, x) {

    if (root == null)
        return;


    if ((root.left != null && root.right == null || 
        root.right != null && root.left == null))
        sum += root.data;
        // console.log(root.data)

    sumOfParentOfX(root.left, x);
    sumOfParentOfX(root.right, x);

}

function sumOfParentOfXUtil(root, x=1) {
    sum = 0;
    sumOfParentOfX(root, x);

    return sum;
}


function convertToNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "N" && arr[i] !== 'None') {
            arr[i] = parseInt(arr[i]);
        } else {
            arr[i] = null;
        }
    }
}

let T = parseInt(readLine())
while (T--) {
    let N = parseInt(readLine());
    let arr = readLine().split(" ");
    convertToNumber(arr);
    let tree = new BinaryTree();
    tree.root = tree.insertLevelOrder(arr, 0, N);

    printRightView(tree.root);
    // console.log(addBT(tree.root))
    // console.log(findLargestSubtreeSum(tree.root))
    // console.log(sumOfParentOfXUtil(tree.root,1))
    console.log(rightAdd(tree.root))
}