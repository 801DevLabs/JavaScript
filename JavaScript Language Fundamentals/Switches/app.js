/*
========================================
SWITCHES
========================================
*/

const color = 'red'

switch(color) {
  case 'red':
    console.log('Color is red')
    break
  case 'blue':
    console.log('Color is blue')
    break
  default:
    console.log('Color is neither red nor blue')
    break
}

let today = new Date()

switch(today.getDay()) {
  case 0:
    day = 'Sunday'
    break
  case 1:
    day = 'Monday'
    break
  case 2:
    day = 'Tuesday'
    break
  case 3:
    day = 'Wednesday'
    break
  case 4:
    day = 'Thursday'
    break
  case 5:
    day = 'Friday'
    break
  case 6:
    day = 'Saturday'
    break
}

switch(today.getMonth()) {
  case 0:
    month = 'January'
    break
  case 1:
    month = 'February'
    break
  case 2:
    month = 'March'
    break
  case 3:
    month = 'April'
    break
  case 4:
    month = 'May'
    break
  case 5:
    month = 'June'
    break
  case 6:
    month = 'July'
    break
  case 7:
    month = 'August'
    break
  case 8:
    month = 'September'
    break
  case 9:
    month = 'October'
    break
  case 10:
    month = 'November'
    break
  case 11:
    month = 'December'
    break
}

switch(today.getDay()) {
  case 1:
    ending = 'st'
    break
  case 2:
    ending = 'nd'
    break
  case 3:
    ending = 'rd'
    break
  case (val >= 4):
    ending = 'th'
    break
}

console.log(`Today is ${day}, ${month} ${today.getDay()}${ending}`)