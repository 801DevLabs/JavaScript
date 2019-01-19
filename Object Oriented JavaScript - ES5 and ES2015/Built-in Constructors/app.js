/*
========================================
BUILT IN CONSTRUCTORS
========================================
*/

// STRINGS
const name1 = 'Tom'
const name2 = new String('Tom')

// name2.foo = 'bar'

console.log(name2)
console.log(typeof name2)

if(name2 === 'Tom') {
  console.log('YES')
} else {
  console.log('NO')
}

// NUMBER
const num1 = 5
const num2 = new Number(5)

// BOOLEAN
const bool1 = true
const bool2 = new Boolean(true)

// FUNCTION
const getSum1 = function(x,y) {
  return x + y
}

const getSum2 = new Function('x', 'y', 'return 1 + 1')

// OBJECT
const tom1 = {name: 'Tom'}
const tom2 = new Object({name: 'Tom'})

// ARRAY
const arr1 = [1,2,3,4]
const arr2 = new Array(1,2,3,4)

// REGULAR EXPRESSIONS
const re1 = /\w+/
const re2 = new RegExp('\\w+')
console.log(re2)