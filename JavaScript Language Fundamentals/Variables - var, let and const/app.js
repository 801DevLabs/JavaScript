/*
========================================
VARIABLES - VAR, LET AND CONST
========================================
*/

// var, let, const

// var name = 'John Doe'
// console.log(name)
// name = 'Steve Smith'
// console.log(name)

// INIT A VARIABLE
var greeting
console.log(greeting)
greeting = 'Hello'
console.log(greeting)

// LETTERS, NUMBERS, _, $
// CANNOT START WITH NUMBER
var $name = 'John'
var _name = 'John'

// MULTI WORD VARS
var firstName = 'John' // CAMEL CASE
var first_name = 'John' // UNDERSCORE
var FirstName = 'John' // PASCAL CASE

// LET
// let name
// name = 'John Doe'
// console.log(name)
// name = 'Steve Smith'
// console.log(name)

// CONST
// const name = 'John'
// name = 'Steve' // CANNOT REASSIGN
// console.log(name)
// const greeting // HAVE TO ASSIGN A VALUE
const person = {
  name: 'John',
  age: 30
}

person.name = 'Steve'
person.age = '32'
console.log(person)

const numbers = [1,2,3,4,5]
numbers.push(6)
console.log(numbers)
