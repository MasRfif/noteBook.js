//1.
function dupNum(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && result.indexOf(nums[i]) === -1) {
        result.push(nums[i]);
      }
    }
  }

  return result;
}

console.log(dupNum([2, 2, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]));
console.log(dupNum([2, 3, 3]));

//2.
