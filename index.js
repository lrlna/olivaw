module.exports = Automata;

function Automata () {
  var ctx = {}

  var neighbourhoods = ['000', '001', '010', '011', '100', '101', '110', '111']

  // need some automata accessible variables
  ctx.automata = []
  ctx.rule

  // create automata lattice based on size (number of cells) provided
  // run over a set number of a given life
  ctx.set = (size, rule, life) => {
    var lattice = []
    lattice = ctx.setState(lattice, size)
    lattice = ctx.setNeighbours(lattice)
    ctx.rule = ctx.getRulesBinary(rule)
    // automata stores each lattice procedurely
    ctx.automata.push(lattice)
    // TODO: consider calling this function outside of the library instead
    // that way user has control
    ctx.automata = ctx.runRules(ctx.automata, life)
    console.log(ctx.automata)

    return ctx.set
  }

  // get a random state and create all cells
  ctx.setState = (lattice, size) => {
    for (var num = 0; num < size; num++) {
      var cell = {}
      cell.state = getRandomState()
      lattice.push(cell)
    }
    return lattice
  }

  ctx.setNeighbours = (lattice) => {
    return lattice.map( (cell, index, array) => {
      var lastEl = lattice.length-1

      if (index === 0) {
        cell.left = lattice[lastEl].state
        cell.right = lattice[index+1].state
        return cell
      }

      if (index === lastEl) {
        cell.right = lattice[0].state
        cell.left = lattice[index-1].state
        return cell
      }

      cell.right = lattice[index-1].state
      cell.left = lattice[index+1].state

      return cell
    })
  }

  // get a neighbour binary from current neighbours \o/
  // thank you @aredridel for the pro-tip
  ctx.getNeighbours = (cell, right, left) => {
    var hood = (left ? 1 : 0) | (cell ? 2 : 0) | (right ? 4 : 0)
    return neighbourhoods[hood]
  }

  // determine rules for a given lattice
  ctx.getRulesBinary = (num) => {
    // let's convert a number to 8-bit binary
    // so pass '10' to parseInt for decimal
    // and '2' toString for binary
    // pass an empty 8 digit string to force into 8-bit
    return ("000000000" + parseInt(num, 10).toString(2)).substr(-8)
  }

  // let's see which rule we are currently looking at
  ctx.getRule = function (neighbourhood) {
    var currentRule
    var rule = [...ctx.rule]

    neighbourhoods.forEach( (hood, index) => {
      if (hood === neighbourhood) {
        currentRule = rule[index]
      }
    })

    return currentRule
  }

  ctx.nextLife = (cell) => {
    var hood = ctx.getNeighbours(cell.state, cell.right, cell.left)
    var rule = ctx.getRule(hood)
    return {
      state: rule
    }
  }

  ctx.runRules = (automata, life, currentLife) => {
    // can also pass an automata externally
    if (!currentLife) currentLife = 0
    var automaton = automata || ctx.automata
    // get the last array
    var lastLife = automaton.slice(-1)[0]

    var nextLife = lastLife.map(ctx.nextLife)
    nextLife = ctx.setNeighbours(nextLife)
    automaton.push(nextLife)

    if (currentLife < life) ctx.runRules(automaton, life, ++currentLife)

    return automaton
  }

  function getRandomState () {
    var min = 0
    var max = 1
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  return ctx
}

Automata().set(20, 110, 2)
