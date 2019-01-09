/*
========================================
OBJECT LITERALS
========================================
*/

const person = {
  firstName: 'Tom',
  lastName: 'Haverford',
  age: 28,
  email: 'tom@gmail.com',
  hobbies: ['music', 'business', 'restaurants'],
  address: {
    city: 'Pawnee',
    state: 'Indiana'
  },
  getBirthYear: function() {
    return 2019 - this.age
  }
}

let val

val = person

// GET SPECIFIC VALUE
val = person.firstName
val = person['firstName']
val = person.age
val = person.hobbies
val = person.hobbies[0]
val = person.address.state
val = person.address['city']
val = person.getBirthYear()

console.log(val)

const people = [
  {
    name: 'Ron',
    age: '54'
  },
  {
    name: 'Ben',
    age: '38'
  },
  {
    name: 'Leslie',
    age: '36'
  }
]

for(let i = 0; i < people.length; i++) {
  console.log(people[i].name)
}