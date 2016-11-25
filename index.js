const Automata = () => {
  var self = {}

  const neighbourhoods = [ '000', '001', '010', '011', '100', '101', '110', '111' ]

  self.automata = []

  // create automata lattice based on size provided
  self.set = (size) => {
    if (!isNumber(size)) return false
    // possibly check whether there is already a cell in automata

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

    // assign
    //self.setRules(lattice)

    console.log(self)

    return self.set
  }

  // figure out who your neighbour are
  self.getNeighbours = () => {
    return self.getNeighbours
  }

  // set neighbourhoods for the current initial lattice
  self.setNeighbours = (lattice) => {
    lattice.forEach(function (cell) {
      // if first cell, it's left neighbour is the last cell
      if (cell === 0) {
        cell.leftNeighbour = lattice.slice(-1)[0].state
        cell.rightNeighbour = lattice[cell+1].state
      }

      // if last cell, it's right neighbour is the first cell
      if (cell === lattice.slice(-1)[0]) {
        cell.rightNeighbour = lattice[0].state
        cell.leftNeighbour = lattice[cell-1].state
      }

      // all else get other cells
      cell.rightNeighbour = lattice[cell-1].state
      cell.leftNeighbour = lattice[cell+1].state

    })
    return self.setNeighbours
  }

  self.nextGeneration = () => {
      // copy last array, append to automaton
  }

  // determine rules for a given lattice
  self.rules = (num) => {
    // let's convert a number to 8-bit binary
    // so pass '10' to parseInt for decimal
    // and '2' toString for binary
    // pass an empty 8 digit string to force into 8-bit
    console.log(("000000000" + parseInt(num, 10).toString(2)).substr(-8))
    return ("000000000" + parseInt(num, 10).toString(2)).substr(-8)
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

Automata().rules(110);
