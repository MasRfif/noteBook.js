//Non-primitive

//1. object

const Id ={
    name: "Odri",
    age: "20",
    gender: "male",
    addresses: "indonesia",
}

console.log(Id.name)
console.log(Id.age)
console.log(Id.gender)
console.log(Id["addresses"])


//2. array

const arr = [1,2,3,4,5,{name: "Odri", age: "20", gender: "male"}]

console.log(arr[0])
console.log(arr[1])
console.log(arr[2+1])
console.log(arr[5]["name"])
console.log(Array.isArray(arr))
console.log(arr.length)


