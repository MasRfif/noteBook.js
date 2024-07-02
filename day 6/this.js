// basic this
console.log(this);

const data = {
  name: "John",
  age: 30,
  address: "newjersey",
  greetJhon: function () {
    console.log(`Hello ${this.name}`);
  },
  identityjhon: () => {},
};

//declare function

function greetJhon() {
  console.log(`Hello ${this.name}`);
}

//reguler function

greetJhon();
data.greetJhon();

// arrow function

const greetJhonArrow = () => {
  console.log(`Hello ${this.name}`);
};

greetJhonArrow();

//call,bind,apply,

const car = {
  name: "BMW",
  year: 2020,
  color: "black",
  cc: 2000,
};
function car1() {
  console.log(this.name);
  console.log(this.color);
  console.log(this.cc);
}

car1.apply(car);
