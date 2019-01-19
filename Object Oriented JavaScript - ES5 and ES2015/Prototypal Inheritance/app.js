/*
========================================
PROTOTYPAL INHERITANCE
========================================
*/

// PERSON CONSTRUCTOR
function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

// GREETING
Person.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}`
}

const person1 = new Person('Tom', 'Haverford')

// console.log(person1.greeting())

// CUSTOMER CONSTRUCTOR
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName)
  this.phone = phone
  this.membership = membership
}

// INHERIT THE PERSON PROTOTYPE METHODS
Customer.prototype = Object.create(Person.prototype)

// MAKE CUSTOMER PROTOTYPE RETURN CUSTOMER
Customer.prototype.constructor = Customer

// CREATE CUSTOMER
const customer1 = new Customer('Ron', 'Swanson' , '555-555-5555', 'Standard')

console.log(customer1)

// CUSTOMER GREETING
Customer.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName} welcome to our company`
}

console.log(customer1.greeting())