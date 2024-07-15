//.1

function withSort(arr1) {
  arr1.sort((a, b) => a - b);

  const rendah_1 = arr1[0];
  const tinggi_1 = arr1[arr1.length - 1];
  const sum = arr1.reduce((nilai1, nilaiAsli) => nilai1 + nilaiAsli);
  console.log(sum);
  const rata2_1 = sum / arr1.length;

  return { rendah_1, tinggi_1, rata2_1 };
}

const arr1 = [12, 5, 23, 12, 4, 45, 32];
const Hasil = withSort(arr1);
console.log(Hasil);

//2.

function concate(arr2) {
  const akhir = arr2.pop();
  const pemisah = arr2.join(",");
  return `${pemisah} and ${akhir}`;
}

let arr2 = ["apple", "banana", "cherry", "watermelon"];
let hasil = concate(arr2);
console.log(hasil);

//3.

function angkaKecil(numbers) {
  if (numbers.length < 2) {
  }
  numbers = numbers.slice().sort((a, b) => a - b);
  return numbers[1];
}

let numbers = [5, 3, 1, 7, 2, 6];
let hasil3 = angkaKecil(numbers);
console.log(hasil3);

//4.

function penjumlahan(angka1, angka2) {
  if (angka1.length !== angka2.length) {
  }
  return angka1.map((x, i) => x + angka2[i]);
}

console.log(penjumlahan([1, 2, 3], [3, 2, 1]));

//5.

function addNew(arr, newElement) {
  if (!arr.includes(newElement)) {
    arr.push(newElement);
  }
  return arr;
}

let arr = [1, 2, 3, 4];
console.log(addNew(arr, 4));
console.log(addNew(arr, 7));
