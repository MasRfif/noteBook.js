//1.display the multiplication table of a given integer.

const input = 9
const limit = 10

for (let i = 1; i <= limit; i++) {
    console.log(`${input} x ${i} = ${input * i}`)
}

//2. check whether a string is a palindrome or not.


const palindrome = "madam";

let reversed = " ";

for (let i = palindrome.length - 1; i >= 0; i--) {
    reversed += palindrome[i];

    console.log(reversed);
}

if (palindrome === reversed) {
    console.log(`${palindrome} is a palindrome`);
} else {
    console.log(`${palindrome} is not a palindrome`);
}

//3.convert centimeter to kilometer.

const centimeter = 100000;

const kilometer = centimeter / 100000;

console.log(`${centimeter} centimeter is equal to ${kilometer} kilometer`);

//4.format number as currency (IDR)

const number = 10000;

console.log(`IDR ${number.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}`);


// 5.remove the first occurrence of a given “search string” from a string

const string = "Hello World";
const cariString = "World";

const index = string.indexOf(cariString);

console.log(string.slice(0, index) + string.slice(index + cariString.length));

//6. make the first letter capital

let text = "my killer"
let slice = text.split(" ")
let upper = " "

for (let i = 0; i < slice.length; i++) {
    slice[i] = slice[i][0].toUpperCase() + slice [i].substring(1)
    upper = slice.join (" ")
}

console.log(upper)

//7.

let text2 = "My KiLlEr"
let swap = " "

for (let i = 0; i < text2.length; i++) {
   if (text2[i] === text2[i].toUpperCase()){
    swap += text2[i].toLowerCase()
   }  else {
    swap += text2[i].toUpperCase()
   }
}
console.log(swap)

