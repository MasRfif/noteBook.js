//1.
function piramida(height) {
  let num = 1;
  for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += `${String(num).padStart(2, "0")} `;
      num++;
    }
    console.log(row.trim());
  }
}

piramida(4);

//2.

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("BuzzFizz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(12);
fizzBuzz(30);

{
  function step2(input) {
    let result = [];
    let counter = 0;

    while (counter < input) counter++;
    if (counter % 5 === 0 && counter % 3 === 0) {
      result.push("FizzBuzz");
    } else if (counter % 3 === 0) {
      result.push("Fizz");
    } else if (counter % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push("counter");
    }
  }
  return result.join(", ");
}
console.log(FizzBuzz(15));

//3.

function Filter(arr) {
  return arr.filter((num) => num % 2 === 0);
}

const ArrayAsli = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const AngkaGenap = Filter(ArrayAsli);
console.log(AngkaGenap);

//4.

function KalkulasiBBTB(BB, TB) {
  const BBTB = BB / TB ** 2;
  if (BBTB < 18.5) {
    return "kurus";
  } else if (BBTB >= 18.5 && BBTB <= 24.9) {
    return "ideal";
  } else if (BBTB >= 25.0 && BBTB <= 29.9) {
    return "keberatan";
  } else if (BBTB >= 30.0 && BBTB <= 39.9) {
    return "belebihan bobot";
  } else {
    return "obesitas";
  }
}

const BB = 80;
const TB = 1.7;
const Hasil = KalkulasiBBTB(BB, TB);
console.log(Hasil);

//5.

function splitHuruf(str) {
  return str.split(" ");
}

const Huruf = "Hello World";
const ArrHuruf = splitHuruf(Huruf);
console.log(ArrHuruf);
