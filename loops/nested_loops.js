const twoSum = function (nums, target) {
  for (let x = 0; x < nums.length; x++) {
    for (let y = x + 1; y < nums.length; y++) {
      if (nums[x] + nums[y] === target) {
        return [x, y];
      }
    }
  }
};

const result = twoSum([3, 1, 4, 2], 6);

console.log(result);
