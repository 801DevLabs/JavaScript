/*
====================================
ADD BOOK TO LIST
====================================
*/

// BOOK CONSTRUCTOR
function Book(title, author, isbn) {
  this.title = title
  this.author = author
  this.isbn = isbn
}

// UI CONSTRUCTOR
function UI() {}

// ADD BOOK TO LIST
UI.prototype.addBookToList = function(book) {
  const list = document.getElementById('book-list')
  // CREATE TR ELEMENT
  const row = document.createElement('tr')
  // INSERT COLS
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `
  list.appendChild(row)
}

// CLEAR FIELDS
UI.prototype.clearFields = function() {
  document.getElementById('title').value = ''
  document.getElementById('author').value = ''
  document.getElementById('isbn').value = ''
}

// EVENT LISTENERS
document.getElementById('book-form').addEventListener('submit', function(e) {
  const title = document.querySelector('#title').value,
        author = document.querySelector('#author').value,
        isbn = document.querySelector('#isbn').value

  // INITIATE BOOK
  const book = new Book(title, author, isbn)

  // INITIATE UI
  const ui = new UI()

  // ADD BOOK TO LIST
  ui.addBookToList(book)

  // CLEAR FIELDS
  ui.clearFields()

  e.preventDefault()
})