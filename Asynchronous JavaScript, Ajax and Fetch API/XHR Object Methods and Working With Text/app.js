/*
========================================
XHR OBJECT METHODS AND WORKING WITH TEXT
========================================
*/

document.querySelector('#button').addEventListener('click', loadData)

function loadData() {
  // CREATE AN XHR OBJECT
  const xhr = new XMLHttpRequest()

  // OPEN
  xhr.open('GET', 'data.txt', true)

  xhr.onload = function() {
    if(this.status === 200) {
      document.querySelector('#output').innerHTML =
      `
      <h1>${this.responseText}</h1>
      `
    }
  }

  xhr.onerror = function() {
    console.log('Request error...')
  }

  xhr.send()
}