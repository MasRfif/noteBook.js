//1 method

function compute(action, x, y) {
  if (action == "add") {
    return x + y;
  } else if (action === "multyply") {
    return x * y;
  } else if (action === "subract") {
    return x - y;
  } else if (action === "devide") {
    return x / y;
  }
}

console.log(compute("subract", 10, 2));

//2. call back

function computeCB(callback, y, x) {
  return callback(x, y);
}
function add(x, y) {
  return x + y;
}
function mudul(x, y) {
  return x % y;
}

//arrow function

//form 1
function modulus(x, y) {
  return x % y;
}
//form 2
const modulus = function modulus(x, y) {
  return x % y;
};
//form 3
const modulus = function (x, y) {
  return x % y;
};
//form 4
const modulus = (x, y) => {
  return x % y;
};
//form 5
const modulus = (x, y) => x % y;
console.log(computeCB(add, 10, 10));
console.log(computeCB(mudul, 2, 0));
