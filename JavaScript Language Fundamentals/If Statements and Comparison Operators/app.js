/*
========================================
IF STATEMENTS AND COMPARISON OPERATORS
========================================
*/

/*
if(something) {
  do something
} else {
  do something else
}
*/

const id = 100
/*
// EQUAL TO
if(id == 100) {
  console.log('CORRECT')
} else {
  console.log('INCORRECT')
}

// NOT EQUAL TO
if(id != 100) {
  console.log('CORRECT')
} else {
  console.log('INCORRECT')
}

// EQUAL TO VALUE AND TYPE
if(id === 100) {
  console.log('CORRECT')
} else {
  console.log('INCORRECT')
}

// NOT EQUAL TO VALUE AND TYPE
if(id !== 100) {
  console.log('CORRECT')
} else {
  console.log('INCORRECT')
}
*/

/*
// TEST IF UNDEFINED
if(typeof id != 'undefined') {
  console.log(`The id is ${id}`)
} else {
  console.log('NO ID')
}
*/

/*
// GREATER THAN OR LESS THAN
if(typeof id >= 200) {
  console.log(`CORRECT`)
} else {
  console.log('INCORRECT')
}
*/

/*
// IF ELSE
const color = 'yellow'

if(color === 'red') {
  console.log('Color is red')
} else if(color === 'blue') {
  console.log('Color is blue')
} else {
  console.log('Color is neither red nor blue')
}
*/

// LOGICAL OPERATORS
const name = 'Tom'
const age = 28

// AND &&
if(age > 0 && age < 13) {
  console.log(`${name} is a child`)
} else if(age > 12 && age < 20 ) {
  console.log(`${name} is a teenager`)
} else {
  console.log(`${name} is an adult`)
}

// OR ||
if(age < 16 || age > 65) {
  console.log(`${name} cannot run in the race`)
} else {
  console.log(`${name} is registered for the race`)
}

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT')

// WITHOUT BRACES
if(id === 100)
   console.log('CORRECT')
else
  console.log('INCORRECT')