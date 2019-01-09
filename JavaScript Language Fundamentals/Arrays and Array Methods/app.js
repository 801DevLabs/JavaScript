/*
========================================
Template Literals
========================================
*/

const name = 'Tom'
const age = 28
const job = 'Schedule Coordinator'
const city = 'Pawnee'
let html

// WITHOUT TEMPLATE STRINGS (es5)

html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>'

html = '<ul>' +
       '<li>Name: ' + name + '</li>' +
       '<li>Age: ' + age + '</li>' +
       '<li>Job: ' + job + '</li>' +
       '<li>City: ' + city + '</li>'

function hello() {
  return 'Hello'
}

// WITH TEMPLATE STRINGS (es6)
html = 
`<ul>
  <li>Name: ${name}</li>
  <li>Age: ${age}</li>
  <li>Job: ${job}</li>
  <li>City: ${city}</li>
  <li>${2+2}</li>
  <li>${hello()}</li>
  <li>${age >= 30 ? '30 or older' : 'Younger than 30'}</li>
</ul>`


document.body.innerHTML = html