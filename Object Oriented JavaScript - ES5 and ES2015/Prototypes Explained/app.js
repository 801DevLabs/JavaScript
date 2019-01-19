/*
========================================
PROTOTYPES EXPLAINED
========================================
*/

// OBJECT PROTOTYPE

// PERSON PROTOTYPES

// PERSON CONSTRUCTOR
function Person(firstName, lastName, dob) {
  this.firstName = firstName
  this.lastName = lastName
  this.birthday = new Date(dob)
  // this.calcAge = function() {
  //   const diff = Date.now() - this.birthday.getTime()
  //   const ageDate = new Date(diff)
  //   return Math.abs(ageDate.getUTCFullYear() - 1970)
  // }
}

// CALCULATE AGE
Person.prototype.calculateAge = function() {
  const diff = Date.now() - this.birthday.getTime()
  const ageDate = new Date(diff)
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

// GET FULL NAME
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`
}

// GETS MARRIED
Person.prototype.getsMarried = function(newLastName) {
  this.lastName = newLastName
}

const Tom = new Person('Tom', 'Haverford', '7/6/1990')
const Ron = new Person('Ron', 'Swanson', '2/4/1963')
const April = new Person('April', 'Ludgate', '4/6/1990')

console.log(Tom)
console.log(Tom.getFullName())
console.log(Tom.calculateAge())

April.getsMarried('Dwire')
console.log(April.getFullName())

console.log(April.hasOwnProperty('firstName'))
console.log(April.hasOwnProperty('getFullName'))