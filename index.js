const Automata = () => {
  var self = {}

  const neighbourhoods = [ '000', '001', '010', '011', '100', '101', '110', '111' ]

  self.automata = []

  // create automata lattice based on size (number of cells) provided
  // run over a set number of a given life
  self.set = (size, rule, life) => {
    // possibly check whether there is already a cell in automata
    var lattice = []

    lattice = self.setState(lattice, size)

    // assign rules
    var rules = self.getRules(rule)

    // assign all the neighbours
    lattice = self.setNeighbours(lattice)

    // automata stores each lattice procedurely
    self.automata.push(lattice)

    // modify the lattice to have the whole neighbourhood
    lattice = self.getNeighbours(lattice)

    return self.set
  }

  self.setState = (lattice, size) => {
    for (var num = 0; num < size; num++) {
      var cell = {}
      // start at a random state
      cell.state = getRandomState()
      lattice.push(cell)
    }
    return lattice
  }

  // figure out who your neighbour are
  self.getNeighbours = (lattice) => {
    return lattice.map( (cell) => {
      var states = Object.keys(cell).map( (key) =>{
        return cell[key]
      })
      // join states into a single neighbourhood
      cell.neighbourhood = states.join('')
      return cell
    })
  }

  // set neighbourhoods for the current initial lattice
  self.setNeighbours = (lattice) => {
    return lattice.map(function (cell, index, array) {
      var lastEl = lattice.length-1

      // if first cell, it's left neighbour is the last cell
      if (index === 0) {
        cell.leftNeighbour = lattice[lastEl].state
        cell.rightNeighbour = lattice[index+1].state
        return cell
      }

      // if last cell, it's right neighbour is the first cell
      if (index === lastEl) {
        cell.rightNeighbour = lattice[0].state
        cell.leftNeighbour = lattice[index-1].state
        return cell
      }

      // all else get other cells
      cell.rightNeighbour = lattice[index-1].state
      cell.leftNeighbour = lattice[index+1].state

      return cell
    })
  }

  // determine rules for a given lattice
  self.getRules = (num) => {
    // let's convert a number to 8-bit binary
    // so pass '10' to parseInt for decimal
    // and '2' toString for binary
    // pass an empty 8 digit string to force into 8-bit
    return ("000000000" + parseInt(num, 10).toString(2)).substr(-8)
  }

  self.runRules = (lattice, rules) => {
    // check if we have an automata to run rules on
    // otherwise throw an error
    if (!self.automata.length) return false
    var currentYear = self.automata.slice(-1)[0]
  }

  self.nextGeneration = () => {
      // copy last array, append to automaton
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

  return self
}

module.exports = Automata;

Automata().set(20, 110, 200);
