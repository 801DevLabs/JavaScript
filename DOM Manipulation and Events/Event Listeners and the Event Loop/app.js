/*
====================================
EVENT LISTENERS AND THE EVENT LOOP
====================================
*/

document.querySelector('.clear-tasks').addEventListener('click', function(e) {
  console.log('Hello World')

  e.preventDefault()
})

document.querySelector('.clear-tasks').addEventListener('click', onClick)

function onClick(e) {
  // console.log('Clicked')

  let val

  val = e

  // EVENT TARGET ELELEMENT
  val = e.target
  val = e.target.id
  val = e.target.className
  val = e.target.classList

  // EVENT TYPE
  val = e.type

  // TIMESTAMP
  val = e.timeStamp

  // COORDS EVENT RELEATIVE TO THE WINDOW
  val = e.claientY
  val = e.clientX

  // COORDS EVENT RELATIVE TO THE ELEMENT
  val = e.offsetY
  val = e.offsetX

  console.log(val)
  e.preventDefault()
}