//1.array

//2. Object

//3. set

const set = new Set([1, 2, 3]);

set.add(3);
set.add(2);
set.add(4);
set.add(3);
set.add(7);
set.add({ name: "jihan" });
set.add("eyyo");
set.delete(3);
//console.log(set.has(4))
//set.clear

//4.map

const map = new Map([["name", 10], [({}, "sinarmas MSIG")]]);

map.set(5000, {});
console.log(map.get(5000));
map.forEach((value, key, map) => {
  console.log(value, key, map);
});
console.log(map.has(8970979));
