// 1. falsly

console.log(Boolean(0))
console.log(Boolean(NaN))
console.log(Boolean(""))
console.log(Boolean(null))
console.log(Boolean(undefined))

// 2. truthy

console.log(Boolean(100))
console.log(Boolean(0.00005))
console.log(Boolean("word"))
console.log(Boolean([]))
console.log(Boolean({}))
console.log(Boolean(true))

//3. AND

console.log(Boolean(100) && Boolean(! 0.00005))
console.log(Boolean(100) && Boolean("word"))
console.log(Boolean(100) && Boolean([]))
console.log(Boolean(100) && Boolean({}))
console.log(Boolean(100) && Boolean(true))

//4. OR

console.log(Boolean(100) || Boolean(0.00005))
console.log(Boolean(100) || Boolean("word"))
console.log(Boolean(100) || Boolean([]))
console.log(Boolean(100) || Boolean({}))
console.log(Boolean(100) || Boolean(true))

//5. NOT

console.log(!Boolean(100))
console.log(!Boolean(0.00005))
console.log(!Boolean("word"))
console.log(!Boolean([]))
console.log(!Boolean({}))
console.log(!0)
console.log(!false)

//example

let name = "iwan"
let age = 57
let gender = "male"

if (age === 57 && name ==="iwan" && gender === "male") {
    console.log(`you OLD ASF boi`)
}

if (age === 57 || name ==="iwan"  && gender === "male") {
    console.log(`you OLD ASF boi`)
}
