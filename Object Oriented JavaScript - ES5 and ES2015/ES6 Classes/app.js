/*
========================================
ES6 CLASSES
========================================
*/

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName
    this.lastName = lastName
    this.birthday = new Date(dob)
  }
  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`
  }
  calculateAge() {
    const diff = Date.now() - this.birthday.getTime()
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }
  getsMarried(newLastName) {
    this.lastName = newLastName
  }
  static addNumbers(x, y) {
    return x + y
  }
}

const Tom = new Person('Tom', 'Haverford')
const April = new Person('April', 'Ludgate', '4/7/1990')

console.log(April.greeting())
console.log(April.calculateAge())

April.getsMarried('Dwire')

console.log(April.greeting())

console.log(Person.addNumbers(1,2))