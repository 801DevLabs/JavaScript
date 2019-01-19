/*
========================================
CONSTRUCTORS AND THE THIS KEYWORD
========================================
*/

const tom = {
  name: 'Tom',
  age: 28
}

console.log(tom.age)

// PERSON CONSTRUCTOR
function Person(name, dob) {
  this.name = name
  // this.age = age
  this.birthday = new Date(dob)
  this.calcAge = function() {
    const diff = Date.now() - this.birthday.getTime()
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }
}

const Tom = new Person('Tom', '7-6-1990')

console.log(Tom.calcAge())