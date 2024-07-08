// fibbonachi

/*
question:givin an interger, find the fibonacci sequence of that interger

1.defind / validate if the number is a string or a minus number
2.validate if the input is a positive number returm the number 
3. if the number is a positive sum the number from loop
4. and put the interger (n) on result 


*/

function fibonacci(n) {
  if (n < 0 || typeof n !== "number") {
    throw new Error("not worth it");
  }

  if (n === 0 || n === 1) return n;

  let sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.pop();
}

// console.log(fibonacci(-1)); // throw error
// console.log(fibonacci("one")); // throw error
console.log(fibonacci(0)); //
console.log(fibonacci(1)); //
console.log(fibonacci(2)); //
console.log(fibonacci(3)); //
console.log(fibonacci(4)); //
console.log(fibonacci(10)); // 55

//prime or na
/* 
question; if the number is prime or not 

1. first make the variable of the number that we want to define
2. validate with if (number <= 1) is a prime because prime is start with 1  
3. now we make a loop so it can find a number that can find prime or not prime
4. inside the loop if the loop number % by 0 it will be false or not a prime number


*/

// function Prime(n) {
//   if (n <= 1) return "its a prime number";
//   else {
//     let isPrime = true
//     for (let i = 2; i < n; i++) {
//       if (n % i === 0) prime = false;
//     }

//   }
// }

// console.log(Prime(2))

function isPrime(n) {
  if (n < 0 || typeof n !== "number") throw new Error("not valid");
  if (n <= 2) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));

// is power of two
/*
Dit: return true if the number given is a power of two, else false

Diket: 

Jwb:
1. first make the variable of the number that we want to define
2. validate if the number is less than or equal to 0 or not a number
3. if the number is 0 or 1 it is a power of two
4. now we make a loop so it can find a number that can find power of two or not power of two
5. inside the loop if the loop number % by 0 it will be false or not a power of two
*/
function isPowerOfTwo(n) {
  //o(n)
  if (n <= 0 || typeof n !== "number") throw new Error("not valid");
  //o(n)
  if (n === 0 || n === 1) return true;
  while (n % 2 === 0) {
    n = n / 2;
  }
  return n === 1;
}

console.log(isPowerOfTwo(14)); // false
console.log(isPowerOfTwo(32)); // true
