//1. .toString
let arry = [ "1,2,3,4,5,6"]
    console.log(arry)

//2..join
let Arry = [ "onu"," dos "," tress"]

    console.log(Arry.join(" |"))

//3. .pop
let arry1 = ["aku","kamu","kita"]
console.log(arry1.pop())
console.log(arry1)

//4. .push

let arry2 = [1,2,3,4,5,]
console.log(arry2.push("six","seven","eight"))
console.log(arry2)

//5 .shift

let arry3 = [1,2,3,4,5]
console.log(arry3.shift())
console.log(arry3)

//6. .unshift

let arry4 = [1,2,3,4,5]
console.log(arry4.unshift("one","two","three"))
console.log(arry4)

//7. .slice

let arry5 = [1,2,3,4,5]
console.log(arry5.slice(1,3))
console.log(arry5)

//8. .splice

let arry6 = [6,7,8,9,10]
console.log(arry6.splice(1,3))
console.log(arry6)

//9. .reverse

let arry7 = [1,2,3,4,5]
console.log(arry7.reverse())
console.log(arry7)

//10. .sort

let arry8 = [1,2,3,4,5]
console.log(arry8.sort())
console.log(arry8)

// .length

let arry15s = [1,2,3,4,5]
console.log(arry15s.length)
console.log(arry15s)

//11. .concat

let arry9 = [1,2,3,4,5]
let angka = ["one","two","three"]
console.log(arry9.concat(angka))
console.log(arry9)

//12. .indexOf

let arry10 = [1,2,3,4,5]
console.log(arry10.indexOf(3))
console.log(arry10)

//13. .lastIndexOf

let arry11 = [1,2,3,4,5]
console.log(arry11.lastIndexOf(5))
console.log(arry11)

//14. .includes

let arry12 = [1,2,3,4,5]
console.log(arry12.includes(3))
console.log(arry12)

//15. .find

let arry13 = [1,2,3,4,5]
console.log(arry13.find(x => x > 3))
console.log(arry13)

//16. .findIndex

let arry14 = [1,2,3,4,5]
console.log(arry14.findIndex(x => x > 3))
console.log(arry14)

//17. .fill

let arry15 = [1,2,3,4,5]
console.log(arry15.fill(1000))
console.log(arry15)

//18. .copyWithin

let arry16 = [1,2,3,4,5]
console.log(arry16.copyWithin(1,3))
console.log(arry16)

//19. .entries

let arry17 = [1,2,3,4,5]
console.log(arry17.entries())
console.log(arry17)

//20. .keys

let arry18 = [1,2,3,4,5]

console.log(arry18.keys())

//21. .values

let arry19 = [1,2,3,4,5]

console.log(arry19.values())

//22. .forEach

let arry20 = [1,2,3,4,5]

console.log(arry20.forEach(x => console.log(x)))
console.log(arry20)

//23. .map

let arry21 = [1,2,3,4,5,]

console.log(arry21.map(x => x * 2))
console.log (arry21.map(z => z % 4 ))
console.log(arry21)

//24. .filter

let arry22 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

console.log(arry22.filter(x => x % 2 === 0))
console.log(arry22)

//25. .reduce

let arry23 = [1,2,3,4,5]

console.log(arry23.reduce((a,b) => a + b))
console.log(arry23)

//26. .reduceRight

let arry24 = [1,2,3,4,5]

console.log(arry24.reduceRight((a,b) => a + b))
console.log(arry24)

//27. .every

let arry25 = [1,2,3,4,5]

console.log(arry25.every(x => x > 3))
console.log(arry25)

//28. .some

let arry26 = [1,2,3,4,5]

console.log(arry26.some(x => x > 3))
console.log(arry26)

//29. .flat

let arry27 = [1,2,3,4,5]

console.log(arry27.flat())
console.log(arry27)

//30. .flatMap

let arry28 = [1,2,3,4,5]

console.log(arry28.flatMap(x => x * 2))
console.log(arry28)

//31. .isArray

let arry29 = [1,2,3,4,5]

console.log(Array.isArray(arry29))
console.log(arry29)

