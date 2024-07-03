// // let person = {
// //   name: "fulan",
// //   age: 2,
// //   gender: "male",
// //   geretPer: function () {
// //     console.log(`halo ${this.name}`);
// //   },
// // };
// // person.geretPer();
// // Object.keys(person);

// //

// let gaji = 30_000;
// let overtime = 10;
// let rate = 20;

// function Gaji(gaji, overtime, rate) {
//   return gaji + overtime * rate;
// }

// Gaji(gaji, overtime, rate);

// // oop

// let pekerja = {
//   gaji: 30_000,
//   overtime: 10,
//   rate: 20,
//   Gaji: function () {
//     return this.gaji + this.over * this.rate;
//   },
// };

// pekerja.Gaji();

// // Factory Function
// /*
// regular Object

// let circle11 = {
//   radius:5,
//   locaton: {
//   x:10,
//   y:29,
//   }
//   draw: function (){
//   console.log("draw")
//   }
// }
//   circle.draw()
//   const circle1 = {...circle, radius: 200}

// */

// function object(radius) {
//   return {
//     radius,
//     location: {
//       x: 10,
//       y: 20,
//     },
//     draw() {
//       console.log("draw");
//     },
//   };
// }

// let Circle1 = object(10);
// let Circle2 = object(20);

// Circle1.draw();
// Circle2.draw();

// //consturctor func

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// let circle3 = new Circle(10);
// let circle4 = new Circle(20);

//abstruction

function CircleAbs(radius) {
  let defaultDrawing = "Dragon";
  this.finalDrawing = `ini final drawing ${defaultDrawing}`;
  this.radius = radius;
  this.location = { x: 1, y: 5 };
  this.draw = function () {
    return this.defaultDrawing;
  };

  Object.defineProperty(this, "defaultDrawing", {
    get: function () {
      return "defaultDrawing";
    },
    set: function (x) {
      if (typeof x === "number") throw new Error(" this error");
      defaultDrawing = x;
    },
  });
}

let circleAbs1 = new CircleAbs(5);
console.log(circleAbs1.draw());
console.log(circleAbs1);
console.log(circleAbs1.defaultDrawing);
console.log(circleAbs1.draw());
circleAbs1.defaultDrawing = "kochecnk";
console.log(circleAbs1.defaultDrawing);
circleAbs1.radius = "string";
console.log(circleAbs1.radius);
