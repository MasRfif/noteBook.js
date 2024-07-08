// linear search

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// binary search

// function binarySearch(arr, 1, r, x){
//     if (r>= 1) {
//     let midl + Math.floor((г-1) / 2);
//     if (arr[mid] == x) return mid;
//     if (arr[mid] > x)
//     return binarySearch(arr, 1, mid - 1, x);
//     return binarySearch(arr, mid + 1, r, х);
//     }
//     return -1;
//     }
//     let arr = [ 2, 3, 4, 10, 40 ];
//     let x = 10;
//     console.log(binarySearch(arr, 6, arr.length-1, x))
