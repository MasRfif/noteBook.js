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


//2.1

function new(a,b){
    let newObj = {}
    for (let [key,val] of Object.entries(a)){
        if (a[key]===b[key])
            Object.assign(newObj, {[key]; val})
    } 
    
}

return newObj



