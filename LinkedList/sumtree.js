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
}

function getSum(root) {
	// write code here
	if (root === null){
		return 0
	}
	return getSum(root.left) + root.data + getSum(root.right)
}

function isSumTree(root) {
	// write code here
	if (root == null){
		return true
	}

	if (root.left == null && root.right == null){
		return true
	}
	let leftSum = getSum(root.left)
	let rightSum = getSum(root.right)
	if (root.data === leftSum + rightSum && isSumTree(root.left) && isSumTree(root.right)){
		return true
	}

	return false
}
function convertToNumber(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== "N") {
			arr[i] = parseInt(arr[i]);
		} else {
			arr[i] = null;
		}
	}
}

let T = parseInt(readLine());
while (T--) {
	let arr = readLine().split(" ");
	convertToNumber(arr);
	let tree = new BinaryTree();
	tree.root = tree.insertLevelOrder(arr, 0, arr.length);
	if (isSumTree(tree.root)) {
		console.log("Yes");
	} else {
		console.log("No");
	}
}