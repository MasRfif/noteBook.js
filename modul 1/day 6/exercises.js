//1,a function to check if two objects are equal

function setaraOrNo(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

console.log(setaraOrNo({ a: 1, b: 2 }, { a: 1, b: 2 }));

//2.function to get the intersection of two objects

function getIntersection(obj1, obj2) {
  return Object.keys(obj1).reduce((acc, key) => {
    if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
      acc[key] = obj1[key];
    }
    return acc;
  }, {});
}

const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, c: 3 };
console.log(getIntersection(obj1, obj2));

function mergeData(arr1, arr2) {
  return [...arr1, ...arr2].filter(
    (student, index, self) =>
      index ===
      self.findIndex(
        (t) => t.name === student.name && t.email === student.email
      )
  );
}

const arr10 = [
  { name: "Student 1", email: "Student1@mail.com" },
  { name: "Student 2", email: "Student2@mail.com" },
];

const arr11 = [
  { name: "Student 1", email: "Student1@mail.com" },
  { name: "Student 3", email: "Student3@mail.com" },
];

console.log(mergeData(arr10, arr11));
