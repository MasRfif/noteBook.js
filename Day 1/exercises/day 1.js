//1. area

  let panjang = 5
  let lebar = 3
  let area = (panjang * lebar)

    console.log(`ukuran kotak nya addalah: ${area}`)

//2. parameters

let panjanng = 5
let lebaar = 3
let parameter = 2 * (panjanng + lebaar)

  console.log(`jadi parameter nya addalah: ${parameter}`)

//3. diameter, circumference and area of a circle.

let diameter = 7
let lingkaran = 2 * Math.PI * diameter
let keliling = Math.PI * diameter * diameter

  console.log(`jadi diameter nya addalah: ${keliling}`)

//4. angles of triangle if two angles are given.

let A = 80
let B = 65
let segitiga = 180 - (A + B)

  console.log(`jadi sudut nya addalah: ${segitiga} degrees`)

//5. difference between dates in days.

let day1 = new Date( "2022-01-20" )
let day2 = new Date( "2022-01-22" )
let difference = Math.abs(day1 - day2) / 1000 / 3600 / 24

  console.log(`jadi selisih nya addalah: ${difference} days`)



//6. Convert days to years, months, and days 

let days = 400;
let years = Math.floor(days / 365);
let remainingDays = days % 365;
let months = Math.floor(remainingDays / 30);
remainingDays %= 30;
console.log(`${years} year, ${months} month, ${remainingDays} days`);


days = 366;
years = Math.floor(days / 365);
remainingDays = days % 365;
months = Math.floor(remainingDays / 30);
remainingDays %= 30;
console.log(`${years} year, ${months} month, ${remainingDays} days`);



