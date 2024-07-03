// let person = {
//   name: "fulan",
//   age: 2,
//   gender: "male",
//   geretPer: function () {
//     console.log(`halo ${this.name}`);
//   },
// };
// person.geretPer();
// Object.keys(person);

//

let gaji = 30_000;
let overtime = 10;
let rate = 20;

function Gaji(gaji, overtime, rate) {
  return gaji + overtime * rate;
}

Gaji(gaji, overtime, rate);

// oop

let pekerja = {
  gaji: 30_000,
  overtime: 10,
  rate: 20,
  Gaji: function () {
    return this.gaji + this.over * this.rate;
  },
};

pekerja.Gaji();

// Factory Function
/*
regular Object

let circle11 = {
  radius:5,
  locaton: {
  x:10,
  y:29,
  }
  draw: function (){
  console.log("draw")
  }
}
  circle.draw()
  const circle1 = {...circle, radius: 200}

*/

function object(radius) {
  return {
    radius,
    location: {
      x: 10,
      y: 20,
    },
    draw() {
      console.log("draw");
    },
  };
}

let Circle1 = object(10);
let Circle2 = object(20);
