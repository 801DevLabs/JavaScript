/*
========================================
FUNCTION DECLARATIONS AND EXPRESSIONS
========================================
*/

// FUNCTION DECLARATIONS

function greet() {
  console.log('Hello')
}

function greet() {
  return 'Hello'
}

function greet(firstName, lastName) {
  return `Hello ${firstName} ${lastName}`
}

// ES5
function greet(firstName, lastName) {
  if(typeof firstName === 'undefined') {firstName = 'Ron'}
  if(typeof lastName === 'undefined') {lastName = 'Swanson'}
  return `Hello ${firstName} ${lastName}`
}

// ES6
function greet(firstName = 'Ron', lastName = 'Swanson') {
  return `Hello ${firstName} ${lastName}`
}

console.log(greet('Tom', 'Haverford'))


// FUNCTION EXPRESSIONS

const square = function(x = 3) {
  return x * x
}

console.log(square(8))

//IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS

(function(name = 'Ron'){
  console.log(`Hello ${name}`)
})('Tom')

// PROPERTY METHODS
const todo = {
  add: function() {
    console.log('Add todo..')
  },
  edit: function(id) {
    console.log(`Edit todo ${id}`)
  }
}

todo.delete = function() {
  console.log('Delete Todo')
}

todo.add()
todo.edit(22)
todo.delete()