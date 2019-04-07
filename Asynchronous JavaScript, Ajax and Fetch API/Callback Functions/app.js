/*
========================================
CALLBACK FUNCTIONS
========================================
*/

// const newPosts = [
//   {
//     title: 'First Post',
//     body: 'This is the first post'
//   },
//   {
//     title: 'Second Post',
//     body: 'This is the second post'
//   }
// ]

// function addNewPost(newPost, callback) {
//   newPosts.push(newPost)
//   callback()
// }

// function displayPosts() {
//   let output = ''
//   newPosts.forEach(function(asdf){
//     output += `<li>${asdf.title}</li>`
//   })
//   document.body.innerHTML = output
// }

// displayPosts()

// addNewPost({title: 'This is the new post'}, displayPosts)


const data = [
  {
    name: 'Tom',
    lastName: 'Haverford',
    age: 28
  },
  {
    name: 'Ron',
    lastName: 'Swanson',
    age: 54
  },
  {
    name: 'Ben',
    lastName: 'Wyatt',
    age: 38
  },
  {
    name: 'Chris',
    lastName: 'Treager',
    age: 42
  }
]

function addNewPerson(newPerson, callback) {
  setTimeout(function(){
    data.push(newPerson)
    callback()
  }, 2000)
}

function loopData() {
  setTimeout(function(){
  let personInfo = ''
  data.forEach(function(person){
    personInfo += `<li>${person.name} ${person.lastName} is ${person.age} years old.</li>`
  })
  document.body.innerHTML = personInfo
}, 1000)
}

addNewPerson({name: 'Leslie', lastName: 'Knope', age: 36}, loopData)