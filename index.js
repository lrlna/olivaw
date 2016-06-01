var fs = require("fs")

function Automata () {
  var self = {}

  self.lattice = []

  // create automata lattice based on size provided
  self.set = function (size) {
    if (!isNumber(size)) return false

    // start at a random state
    size.forEach(function (number) {
      var cell = {}
      cell.state = getRandomState()
      self.lattice.push(cell.state)
    })

    // assign all the neighbours
    self.setNeighbours()

    return self.automata
  }

  // figure out neighbourhoods
  self.getNeighbours = function () {

    return self.getNeighbours
  }

  self.setNeighbours = function () {

    return self.setNeighbours
  }

  self.rules = function () {

    return self.rules
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

/* possible structure:
 * [
 *   // lattice
 *   [
 *     // cell
 *     {
 *       state: true,
 *       leftNeighbour: true,
 *       rightNeighbour: false
 *     },
 *     // cell
 *     {
 *       state: true,
 *       leftNeighbour: true,
 *       rightNeighbour: false
 *     },
 *     // cell
 *     {
 *       state: true,
 *       leftNeighbour: true,
 *       rightNeighbour: false
 *     }
 *   ],
 *   // lattice
 *   [
 *     // cell
 *     {
 *       state: true,
 *       leftNeighbour: true,
 *       rightNeighbour: false
 *     },
 *     // cell
 *     {
 *       state: true,
 *       leftNeighbour: true,
 *       rightNeighbour: false
 *     },
 *     // cell
 *     {
 *       state: true,
 *       leftNeighbour: true,
 *       rightNeighbour: false
 *     }
 *   ]
 * ]
 */
