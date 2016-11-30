const Automata = () => {
  var self = {}

  const neighbourhoods = [ '000', '001', '010', '011', '100', '101', '110', '111' ]

  // need some automata accessible variables
  self.automata = []
  self.rule

  // create automata lattice based on size (number of cells) provided
  // run over a set number of a given life
  self.set = (size, rule, life) => {
    // possibly check whether there is already a cell in automata
    var lattice = []
    // assign a rule binary
    self.rule = self.getRulesBinary(rule)
    lattice = self.setState(lattice, size)
    lattice = self.setNeighbours(lattice)
    // automata stores each lattice procedurely
    self.automata.push(lattice)
    self.automata = self.runRules(self.automata)
    console.log(self.automata)
    // consider calling this function outside of the library instead
    // that way user has control
    //self.runAutomata(life)

    return self.set
  }

  // get a neighbour binary from current neighbours \o/;
  // thank you @aredridel for the pro-tip
  self.getNeighbours = (cell, right, left) => {
    return neighbourhoods[left ? 1 : 0 | cell ? 2 : 0 | right ? 4 : 0]
  }

  // get a random state and create all cells
  self.setState = (lattice, size) => {
    for (var num = 0; num < size; num++) {
      var cell = {}
      // start at a random state
      cell.state = getRandomState()
      lattice.push(cell)
    }
    return lattice
  }

  // set neighbourhoods for the current initial lattice
  self.setNeighbours = (lattice) => {
    return lattice.map( (cell, index, array) => {
      var lastEl = lattice.length-1

      // if first cell, it's left neighbour is the last cell
      if (index === 0) {
        cell.left = lattice[lastEl].state
        cell.right = lattice[index+1].state
        return cell
      }

      // if last cell, it's right neighbour is the first cell
      if (index === lastEl) {
        cell.right = lattice[0].state
        cell.left = lattice[index-1].state
        return cell
      }

      // all else get other cells
      cell.right = lattice[index-1].state
      cell.left = lattice[index+1].state

      return cell
    })
  }


  // determine rules for a given lattice
  self.getRulesBinary = (num) => {
    // let's convert a number to 8-bit binary
    // so pass '10' to parseInt for decimal
    // and '2' toString for binary
    // pass an empty 8 digit string to force into 8-bit
    return ("000000000" + parseInt(num, 10).toString(2)).substr(-8)
  }

  // let's see which rule we are currently looking at
  self.getRule = (neighbourhood) => {
    var currentRule
    var rule = [...self.rule]

    neighbourhoods.forEach( (hood, index) => {
      if (hood === neighbourhood) currentRule = rule[index]
    })

    return currentRule
  }

  self.nextLife = (cell) => {
    var hood = self.getNeighbours(cell.state, cell.right, cell.left)
    var rule = self.getRule(hood)
    return {
      state: rule
    }
  }

  self.runRules = (automata) => {
    // can also pass an automata externally
    var automaton = automata || self.automata
    // get the last array
    var lastLife = automaton.slice(-1)[0]
    var nextLife = lastLife.map(self.nextLife)
    nextLife = self.setNeighbours(nextLife)
    automaton.push(nextLife)

    return automaton
  }

  // run automata over a specified lifetime
  self.runAutomata = (life) => {
    for (year = 0; year < life.length; year++ ) {
      self.automata = self.runRules(self.automata)
    }
  }

  function getRandomState () {
    var min = 0
    var max = 1
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  return self
}

module.exports = Automata;
