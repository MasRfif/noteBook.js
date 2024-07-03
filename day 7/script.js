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
