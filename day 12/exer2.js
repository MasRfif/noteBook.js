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

console.log(dupNum([2, 2, 1]));
console.log(dupNum([2, 3, 3]));

//2.

var romanToInt = function (s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let num = 0;
  romanArr = s.split("");
  console.log(romanArr);
  romanArr.forEach((element, index) => {
    if (roman[element] < roman[romanArr[index + 1]]) {
      num -= roman[element];
    } else {
      num += roman[element];
    }
  });
  return num;
};
