//1

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

//2

function DiffNum(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }
  return result;
}

console.log(DiffNum([2, 2, 1]));
console.log(DiffNum([2, 3, 3]));

//3

function anagram(str1, str2) {
  let sort1 = str1.split("").sort().join();
  let sort2 = str2.split("").sort().join();
  return sort1 === sort2;
}
console.log(anagram("hello", "llohe"));
console.log(anagram("hello", "llobe"));

//4.

function climbStair(num) {
  const ways1 = [1, 2];
  for (let i = 2; i <= num; i++) {
    ways[i] = ways[i - 1] + ways[i - 2];
  }
  return ways[num - 1];
}

console.log(climbStair(3));
