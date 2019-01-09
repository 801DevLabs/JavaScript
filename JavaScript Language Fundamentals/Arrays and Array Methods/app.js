/*
========================================
ARRAYS AND ARRAY METHODS
========================================
*/

// CREATE SOME ARRAYS
const numbers = [43,56,33,23,44,36,5]
const numbers2 = new Array(22,45,33,76,54)
const fruit = ['Apple', 'Banana', 'Orange', 'Pear']
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()]

let val

// GET ARRAY LENGTH
val = numbers.length

// CHECK IF IS ARRAY
val = Array.isArray(numbers)

// GET A SINGLE VALUE
val = numbers[3]
val = numbers[0]

// INSERT INTO ARRAY
numbers[2] = 100

// FIND INDEX OF VALUE
val = numbers.indexOf(36)

// ================
// MUTATING ARRAYS
// ================

// ADD ONTO END
numbers.push(250)

// ADD ONTO FRONT
numbers.unshift(120)

// TAKE OFF FROM END
numbers.pop()

// TAKE OFF FROM FRONT
numbers.shift()

// SPLICE VALUES
numbers.splice(1,3)

// REVERSE
numbers.reverse()

// CONCATENATE ARRAY
val = numbers.concat(numbers2)

// SORTING ARRAYS
val = fruit.sort()
val = numbers.sort()

// USE THE COMPARE FUNCTION
val = numbers.sort(function(x, y){
  return x - y
})

// REVERSE SORT
val = numbers.sort(function(x, y){
  return y - x
})

// FIND
function under50(num) {
  return num < 50
}

function over50(num) {
  return num > 50
}

val = numbers.find(over50)

console.log(numbers)
console.log(val)