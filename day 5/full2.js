// // //1.

// function sum(Acak) {
//   return Acak.filter((element) => typeof element === "number").reduce(
//     (acc, current) => acc + current
//   );
// }

// const Acak = ["7", 5, "string", null, false, undefined, 2];
// console.log(sum(Acak));

// //2.

// function interger(max, ...integers) {
//   const hasil = [];
//   for (let i = 0; i < integers.length && hasil.length < max; i++) {
//     hasil.push(integers[i]);
//   }
//   return hasil;
// }

// const maxSize = 5;
// const hasil = interger(maxSize, 5, 10, 24, 3, 6, 7, 8);
// console.log(hasil);

// //3.

// function number(a, b) {
//   return [].concat(a, b);
// }

// let a = [1, 2, 3, 4, 5];
// let b = [6, 7, 8, 9, 10];
// let c = number(a, b);
// console.log(c);

// //4.

// function duplikat(arr, arr1) {
//   let duplicates = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j] && duplicates.indexOf(arr[i])) {
//         duplicates.push(arr[i]);
//       }
//     }
//   }
//   return duplicates;
// }

// const arr = [1, 2, 2, 2, 3, 3, 4, 4, 5, 5];
// const arr1 = [1, 2, 2, 2, 3, 3, 4, 4, 5, 5];
// console.log(duplikat(arr));

// //5.

// function newNum(arr10, arr11) {
//   let diffNum = [];

//   for (let i of arr10) {
//     if (arr11.includes(i)) continue;
//     diffNum.push(i);
//   }

//   for (let i of arr11) {
//     if (arr10.includes(i)) continue;
//     diffNum.push(i);
//   }
//   return diffNum;
// }

// const arr10 = [1, 2, 3, 4, 5];
// const arr11 = [3, 4, 5, 6, 7];
// console.log(newNum(arr10, arr11));

var expect = function (val) {
  return {
    toBe: (ValueExpected) => {
      if (val === ValueExpected) return { value: true };
      throw new Error("Not Equal");
    },
    notToBe: (ValueExpected) => {
      if (val !== ValueExpected) return { value: true };
      throw new Error("Equal");
    },
  };
};

const result1 = expect(5).toBe(5);
// const result2 = expect(5).toBe(null);
const result3 = expect(5).notToBe(null);
