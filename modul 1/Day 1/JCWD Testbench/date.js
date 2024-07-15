// 1.date

let now = new Date()

// console.log(now)
// console.log(typeof now)
// console.log(now instanceof Date)

console.log(now.getDate())
console.log(now.getDay())
console.log(now.getFullYear())
console.log(now.getHours())

const days = ["sun", "mon", "tue", "wed", "thu" + (now)]

console.log(days[now.getDay()])