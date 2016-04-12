var fs = require("fs")

function Automata () {
  var self = {}

  self.lattice = {}

  // create automata lattice based on size provided
  self.set = function(size) {
    if (!isNumber(size)) return false

    size.forEach(function(number) {
      self.lattice.state = getRandomState()
      self.
    })

    return self.automata
  }

  // figure out neighbourhoods
  self.neighbours = function () {

  }

  function isNumber (x) {
    var number = (typeof x === 'number') ? true : false
    return number 
  }

  function getRandomState () {
    var min = 0
    var max = 1
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}
