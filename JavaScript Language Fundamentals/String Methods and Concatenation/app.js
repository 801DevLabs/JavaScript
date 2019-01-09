/*
========================================
STRING METHODS AND CONCATENATION
========================================
*/

const firstName = 'Tom'
const lastName = 'Haverford'
const age = 28
const str = 'Hello there, my name is Tom'
let val

val = firstName + lastName

// CONCATENATION
val = firstName + ' ' + lastName

// APPENDING
val = 'Tom '
val += 'Haverford'

val = 'Hello, my name is ' + firstName + ' and I am ' + age

// ESCAPING
val = 'That\'s awesome, I can\'t wait'

// LENGTH
val = firstName.length

// CONCAT
val = firstName.concat(' ', lastName)

// CHANGE CASE
val = firstName.toUpperCase()
val = firstName.toLowerCase()

val = firstName[2]

// INDEX OF
val = firstName.indexOf('o')
val = firstName.lastIndexOf('o')

// CHAR AT
val = firstName.charAt('2')

// GET LAST CHARACTER
val = firstName.charAt(firstName.length -1)

// SUBSTRING
val = firstName.substring(0, 4)

// SLICE
val = firstName.slice(0,4)
val = firstName.slice(-3)

// SPLIT
val = str.split(' ')

// REPLACE
val = str.replace('Tom', 'Ron')

// INCLUDES
val = str.includes('Hello')

console.log(val)