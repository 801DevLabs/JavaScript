/*
====================================
TASK LIST - UI AND ADDING TASKS
====================================
*/

// DEFINE UI VARS
const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

// LOAD ALL EVENT LISTENERS
loadEventListeners()

function loadEventListeners() {
  // ADD TASK EVEN
  form.addEventListener('submit', addTask)
}

// ADD TASK
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task')
  }

  // CREATE LI ELEMENT
  const li = document.createElement('li')
  // ADD CLASS
  li.className = 'collection-item'
  // CREATE TEXT NODE AND APPEND TO LI
  li.appendChild(document.createTextNode(taskInput.value))
  // CREATE NEW LINK ELEMENT
  const link = document.createElement('a')
  // ADD CLASS
  link.className = 'delete-item secondary-content'
  // ADD ICON HTML
  link.innerHTML = '<li class="fa fa-remove"></li>'
  // APPEND LINK TO LI
  li.appendChild(link)

  // APEND LI TO UL
  taskList.appendChild(li)
  // CLEAR INPUT
  taskInput.value = ''
  
  console.log(li)


  e.preventDefault()
}