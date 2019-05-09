console.log("this.is.test.js")


class Animal {
  constructor(name, color) {
    this.name = name
    this.color = color
  }

  toString() {
    console.log('name:' + this.name + ',color:' + this.color)
  }
}

const animal = new Animal('dog', 'white')
animal.toString()

module.exports = Animal
