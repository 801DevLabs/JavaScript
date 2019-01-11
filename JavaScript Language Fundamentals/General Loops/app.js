/*
========================================
GENERAL LOOPS
========================================
*/

// FOR LOOP
for(let i = 0; i < 10; i++) {
  if(i === 2) {
    console.log('2 is my favorite number')
    continue
  }
  if(i === 5) {
    console.log('Stop the loop')
    break
  }
  console.log('Number' + i)
}

// WHILE LOOP
let i = 0
while(i < 10) {
  console.log('Number ' + i)
  i++
}

// DO WHILE
let i = 100
do {
  console.log('Number ' + i)
  i++
}
while (i < 10)

// LOOP THROUGH ARRAY
const cars = ['BMW', 'AUDI', 'PORSCHE', 'MERCEDES']

// FOR LOOP
for(let i = 0; i < cars.length; i++) {
  console.log(cars[i])
}

// FOREACH LOOP
cars.forEach(function(car, index, array){
  console.log(`${index} : ${car}`)
  console.log(array)
})

// MAP
const users = [
  {
    id: 1,
    name: 'Tom'
  },
  {
    id: 2,
    name: 'Ron'
  },
  {
    id: 3,
    name: 'Ben'
  },
  {
    id: 4,
    name: 'Leslie'
  },
]

const ids = users.map(function(user){
  return user.id
})

// console.log(ids)

const user = {
  fistName: 'Tom',
  lastName: 'Haverford',
  age: 28
}

// FOR IN LOOP
for(let x in user){
  console.log(`${x} : ${user[x]}`)
}