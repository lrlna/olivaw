module.exports = Automata

function Automata () {
  var ctx = {}

  var neighbourhoods = [ '111', '110', '101', '100', '011', '010', '001', '000' ]

  // need some automata accessible variables
  ctx.automata = []
  ctx.rule

  // create automata lattice based on size (number of cells) provided
  // run over a set number of a given life
  ctx.set = function (size, rule, life) {
    var lattice = []
    lattice = ctx.setState(lattice, size)
    lattice = ctx.setNeighbours(lattice)
    ctx.rule = ctx.getRulesBinary(rule)
    // automata stores each lattice procedurely
    ctx.automata.push(lattice)
    // TODO: consider calling this function outside of the library instead
    // that way user has control
    ctx.automata = ctx.runRules(ctx.automata, life)

    return ctx.set
  }

  // get a random state and create all cells
  ctx.setState = function (lattice, size) {
    for (var num = 0; num < size; num++) {
      var cell = {}
      cell.state = getRandomState()
      lattice.push(cell)
    }

    return lattice
  }

  ctx.setNeighbours = function (lattice) {
    return lattice.map(function (cell, index, array) {
      var lastEl = lattice.length - 1

      if (index === 0) {
        cell.left = lattice[lastEl].state
        cell.right = lattice[index + 1].state

        return cell
      }

      if (index === lastEl) {
        cell.right = lattice[0].state
        cell.left = lattice[index - 1].state

        return cell
      }

      cell.right = lattice[index - 1].state
      cell.left = lattice[index + 1].state

      return cell
    })
  }

  ctx.runRules = function (automata, life, currentLife) {
    // want to take in automata externally
    var automaton = automata || ctx.automata
    var lastLife = automaton.slice(-1)[0]
    var nextLife = lastLife.map(ctx.nextLife)
    nextLife = ctx.setNeighbours(nextLife)
    automaton.push(nextLife)

    if (!currentLife) currentLife = 0
    if (currentLife < life) ctx.runRules(automaton, life, ++currentLife)

    return automaton
  }

  ctx.nextLife = function (cell, index) {
    var hood = ctx.getNeighbours(cell.state, cell.right, cell.left)
    var rule = ctx.getRule(hood)

    return {
      state: rule
    }
  }

  ctx.getNeighbours = function (cell, right, left) {
    var current = []
    current.push.apply(current, [right, cell, left])
    var currentHood = current.join('')

    return currentHood
  }

  // let's see which rule we are currently looking at
  ctx.getRule = function (neighbourhood) {
    var currentState = null
    var rule = [...ctx.rule]
    neighbourhoods.forEach(function (hood, index) {
      if (hood === neighbourhood) {
        currentState = rule[index]
      }
    })

    return currentState
  }

  // determine rules for a given lattice
  ctx.getRulesBinary = function (num) {
    // let's convert a number to an 8-bit bae
    var rule = ('000000000' + parseInt(num, 10).toString(2)).substr(-8)
    return rule
  }

  function getRandomState () {
    var min = 0
    var max = 1

    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  return ctx
}
