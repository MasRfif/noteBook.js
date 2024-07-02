//1.

function sum(Acak) {
  let primitive = Acak.filter((element) => typeof element !== "object");
  return primitive;
}

const Acak = [1, [], undefined, {}, "string", {}, []];
console.log(sum(Acak));

//2.
