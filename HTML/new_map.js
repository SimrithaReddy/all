let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let nums = readLine().split(",").map(Number)
let target = parseInt(readLine())
var twoSum = function(nums, target) {
  let map = new Map;
  for (var i = 0; i < nums.length; i++) {
    console.log(map)
      let complement = target - nums[i];
      if (map.has(complement)) {
          return [map.get(complement), i]
      }
     map.set(nums[i], i);
  }
}
console.log(twoSum(nums,target))