function quickSort(array) {
  if (array.length < 2) {
    return array;
  }

  let pivot = array[Math.floor(array.length / 2)];
  let leftArr = [];
  let rightArr = [];

  for (let i = 0; i < array.length; i++) {
    if (i === Math.floor(array.length / 2)) continue;

    if (array[i] < pivot) {
      leftArr.push(array[i]);
    } else {
      rightArr.push(array[i]);
    }
  }

  console.log(pivot);
  console.log(leftArr);
  console.log(rightArr);

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

// [-6, -2, 4, 8, 20]
console.log(quickSort([-6, -7, 20, 8, -2, 4]));
console.log(
  quickSort([-7, 20, -Infinity, Infinity, 8, 0, 0, 0, -2, 4, undefined])
);
