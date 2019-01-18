/*
====================================
TASK LIST - DELETE AND FILTER TASKS
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
  // ADD TASK EVENT
  form.addEventListener('submit', addTask)
  // REMOVE TASK EVENT
  taskList.addEventListener('click', removeTask)
  // CLEAR TASK EVENT
  clearBtn.addEventListener('click', clearTasks)
  // FILTER TASKS EVENT
  filter.addEventListener('input', filterTasks)
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

// REMOVE TASK
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are you sure?')) {
    e.target.parentElement.parentElement.remove()
    }
  }
}

// CLEAR TASKS
function clearTasks() {
  // taskList.innerHTML = ''

  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild)
  }
}

// FILTER TASKS
function filterTasks(e) {
  const text = e.target.value.toLowerCase()

  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent
    
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block'
    } else {
      task.style.display = 'none'
    }
  
  })
}