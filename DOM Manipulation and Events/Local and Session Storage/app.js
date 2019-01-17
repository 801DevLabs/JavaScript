/*
====================================
LOCAL AND SESSION STORAGE
====================================
*/

// SET LOCAL STORAGE ITEM
// localStorage.setItem('name', 'Tom')
// localStorage.setItem('age', '28')

// SET SESSION STORAGE ITEM
sessionStorage.setItem('name', 'Ron')

// REMOVE FROM STORAGE
// localStorage.removeItem('name')
// sessionStorage.removeItem('name')

// // GET FROM STORAGE
// const name = localStorage.getItem('name')
// const age = localStorage.getItem('age')
// console.log(name, age)

// // CLEAR LOCAL STORAGE
// localStorage.clear()

document.querySelector('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value

  let tasks

  if(localStorage.getItem('tasks') === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.push(task)

  localStorage.setItem('tasks', JSON.stringify(tasks))

  alert('Task saved')

  e.preventDefault()
})

const tasks = JSON.parse(localStorage.getItem('tasks'))

tasks.forEach(function(task){
  console.log(task)
})