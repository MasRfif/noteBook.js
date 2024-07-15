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

console.log(computeCB((x, y) => x * y, 10, 60));
//arrow function

// //form 1
// function modulus(x, y) {
//   return x % y;
// }
// //form 2
// const modulus = function modulus(x, y) {
//   return x % y;
// };
// //form 3
// const modulus = function (x, y) {
//   return x % y;
// };
// //form 4
// const modulus = (x, y) => {
//   return x % y;
// };
// //form 5
// const modulus = (x, y) => x % y;
// //form 6
// cosnt moulus = x => x%x
// console.log(computeCB(add, 10, 10));
// console.log(computeCB(mudul, 10, 1));

let generateParenthesis = function (n) {
  let result = [];

  function add(s, open, close) {
    if (s.length === n * 2) {
      result.push(s);
      return;
    }

    if (open < n) {
      add(s + "(", open + 1, close);
    }
    if (close < open) {
      add(s + ")", open, close + 1);
    }
  }

  add("", 0, 0);
  return result;
};

function getuserinfo(name, callback) {
  setTimeout(() => {
    const userinfo = { name: name, age: "16 & 18" };
    callback(userinfo);
  }, 10000);
}
function greetUser(userinfo) {
  console.log(`hai ${userinfo.name} you a MINOR you still ${userinfo.age}`);
}
getuserinfo("ibnu & alpart", greetUser);

let a = 10;
let b = "ayu";
console.log(a + a + b);

console.log(String(12) === "12");

console.log();
