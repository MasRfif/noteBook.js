//array destruction

// const arr = [10,"hallo", 5, [1,2,3]]
// const a = arr[0]
// const b = arr[1]
// const c = arr.slice(2, arr.length)

// console.log(c)

// console.log(a)
// console.log(b)
// console.log(c)

//object Destructure

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    street: "50 main st",
    city: "Boston",
    country: "USA",
  },
};
const { addres, fullName, country } = person;

console.log(person);

//object spread

const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    street: "50 main st",
    city: "Boston",
    country: "USA",
  },
};

const person2 = { ...person1, age: 31, firstName: "odri", hobby: "games" };

console.log(person2);
