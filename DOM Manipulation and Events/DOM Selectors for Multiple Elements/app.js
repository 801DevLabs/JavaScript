/*
====================================
DOM SELECTORS FOR MULTIPLE ELEMENTS
====================================
*/

// GET ELEMENTS BY CLASS NAME

const items = document.getElementsByClassName('collection-item')
console.log(items)
console.log(items[0])
items[0].style.color = 'red'
items[3].textContent = 'Hello'

const listItems = document.querySelector('ul').getElementsByClassName('collection-item')
console.log(listItems)

let lis = document.getElementsByTagName('li')
console.log(lis)
console.log(lis[0])
lis[0].style.color = 'red'
lis[3].textContent = 'Hello'

// CONVERT HTML SELECTION INTO ARRAY
lis = Array.from(lis)

lis.reverse()

lis.forEach(function(li, index) {
  console.log(li)
  li.textContent = `${index}: Hello`
})

console.log(lis)

// QUERY SELECTOR ALL
const items = document.querySelectorAll('ul.collection li.collection-item')

items.forEach(function(item, index){
  item.textContent = `${index}: Hello`
})

const liOdd = document.querySelectorAll('li:nth-child(odd)')
const liEven = document.querySelectorAll('li:nth-child(even)')

liOdd.forEach(function(li, index){
  li.style.background = '#ccc'
})

for(i = 0; i < items.length; i++) {
  liEven[i].style.background = '#f4f4f4'
}

console.log(items)