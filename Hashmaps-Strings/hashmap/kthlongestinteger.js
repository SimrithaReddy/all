
function heapify(arr, i = 0, value = arr[i]) {
    while (true) {
        let j = i*2+1;
        if (j+1 < arr.length && arr[j] > arr[j+1]) j++; // Choose child with least value
        if (j >= arr.length || value <= arr[j]) break;
        arr[i] = arr[j];
        i = j;
    }
    arr[i] = value;
}

function buildHeap(arr) {
    for (let i = (arr.length-1) >> 1; i >= 0; i--) heapify(arr, i);
    return arr;
}

function findKthLargest(nums, k) {
    const heap = buildHeap(nums.slice(0, k));
    for (let i = k; i < nums.length; i++) {
        if (nums[i] > heap[0]) heapify(heap, 0, nums[i]);
    }
    return heap[0];
}

const nums = [...Array(5000).keys()]; // The array in the question
console.log(findKthLargest(nums, 5000)); // 0