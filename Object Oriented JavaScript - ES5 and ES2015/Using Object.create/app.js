/*
========================================
USING OBJECT CREATE
========================================
*/

const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`
  },
  getsMarried: function(newLastName) {
    this.lastName = newLastName
  }
}

const April = Object.create(personPrototypes)
April.firstName = 'April'
April.lastName = 'Ludgate'
April.age = 28

April.getsMarried('Dwire')

console.log(April.greeting())

const Tom = Object.create(personPrototypes, {
  firstName: {value: 'Tom'},
  lastName: {value: 'Haverford'},
  age: {value: 28}
})

console.log(Tom)

console.log(Tom.greeting())