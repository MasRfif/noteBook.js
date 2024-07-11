//1 . Create a function to convert Excel sheet column title to its corresponding column number

function excelNumberToWord(column) {
  column = column.toUpperCase();
  let result = 0;
  for (let i = 0; i < column.length; i++) {
    let charCode = column.charCodeAt(i) - 64;
    result = result * 26 + charCode;
  }
  return result;
}

console.log(excelNumberToWord("A"));
console.log(excelNumberToWord("B"));
console.log(excelNumberToWord("AAA"));
console.log(excelNumberToWord("aB"));

//2. Given a non-empty array of integers nums, every element appears twice except for one. Find that .single one

function DiffNum(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }
  return result;
}

console.log(DiffNum([2, 2, 1]));
console.log(DiffNum([2, 3, 3]));
