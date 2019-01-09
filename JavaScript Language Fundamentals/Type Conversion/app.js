/*
========================================
TYPE CONVERSION
========================================
*/

let val

// NUMBER TO STRING
val = String(5)
val = String(4+4)

// BOOL TO STRING
val = String(true)

// DATE TO STRING
val = String(new Date())

// ARRAY TO STRING
val = String([1,2,3,4])

// toString()
val = (5).toString()
val = (true).toString()

// STRING TO NUMBER
val = Number('5')
val = Number(true)
val = Number(false)
val = Number(null)
val = Number('Hello')
val = Number([1,2,3])

val = parseInt('100')
val = parseFloat('100.30')

// OUTPUT
// console.log(val)
// console.log(typeof val)
// console.log(val.length)
// console.log(val.toFixed(2))

const val1 = String(5)
const val2 = 6
const sum = Number(val1 + val2)

console.log(sum)
console.log(typeof sum)