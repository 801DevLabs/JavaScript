/*
========================================
SUB CLASSES
========================================
*/

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName)
    this.phone = phone
    this.membership = membership
  }

  static getMemebshipCost() {
    return 500
  }
}

const Tom = new Customer('Tom', 'Haverford', '555-555-5555', 'Standard')

console.log(Tom.greeting())

console.log(Customer.getMemebshipCost())