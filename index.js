var fs = require("fs")

function Automata () {
  var self = {}

  self.automata = []

  // create automata lattice based on size provided
  self.set = function (size) {
    if (!isNumber(size)) return false

    var lattice = []

    // start at a random state
    size.forEach(function (number) {
      var cell = {}
      cell.state = getRandomState()
      lattice.push(cell.state)
    })

    // automata stores each lattice procedurely
    self.automata.push(lattice)

    // assign all the neighbours
    self.setNeighbours(lattice)

    return self.set
  }

  // figure out who your neighbour are
  self.getNeighbours = function () {

    return self.getNeighbours
  }

  // set neighbourhoods for the current lattice
  self.setNeighbours = function (lattice) {
    lattice.forEach(function (cell) {
      // if first cell, it's left neighbour is the last cell
      if (cell === 0) lattice.leftNeighbour = lattice.last

      // if last cell, it's right neighbour is the first cell
      if (cell === last) lattice.rightNeighbour = lattice.first

      // all else get other cells

    })

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
