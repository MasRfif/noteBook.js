//objectsassign
const object1 = { a: 1, b: 2, c: 3, d: 4 };
const object2 = { a: 5, b: 6, c: 7, d: 8 };

console.log(Object.assign(object1, object2));

//object.create

const original = { name: "ibnu" };
const dup = Object.create(original);

console.log(dup);
console.log(original);
console.log(dup === original);

//objrct.entries

const gun = {
  name: "Vandal",
  skin: "Chaos",
  type: "Ak-47",
  ammo: "5.56",
  caliber: "5.56",
  magazine: "30",
};

const value = Object.entries(gun);
console.log(value);

for (let [key, value] of Object.entries(gun)) {
  console.log(`the gun ${key} : ${value}`);
}
