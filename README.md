# Olivaw

A one-dimensional, binary cellular automata library built in ✨  javascript ✨ .

Olivaw allows you to work with any of [Wolfram's elementary automata](https://en.wikipedia.org/wiki/Elementary_cellular_automaton) by providing one of the 256 rules. 

# Usage

```javascript
var olivaw = require('olivaw')()

// set up the initial year of automata's generation
var automaton = olivaw.set(101, 110)
// run through a generation
var automata = olivaw.run(300, automaton)
```

The output you get from `olivaw.run` is an ndarray of automata, where each array is a year in the generation of an automata. It's best to set the generation to run for over 100 years for more interesting results :sparkles:.

## olivaw.set(number, rule)
`number` represents the number of cells to be setup for this generation of automata.
`rule ` is a number between 0 - 256, and represents on of the Wolfram's rules.

## olivaw.run(life [, automata] [, currentYear])
`life`, if the lifespan of the current generation.
`automata` is the array provided by `olivaw.set`, or alternatively the one you provided. This is optional
`currentYear` is the year to start this generations. `currentYear` has to be smaller than `life`.

Given you have this set up:

```javascript
var olivaw = require('olivaw')()

// set up the initial year of automata's generation
var automaton = olivaw.set(2, 110)
// run through a generation
var automata = olivaw.run(automaton, 3)

```

`olivaw.run` provides the following output that you could then work with:

``` javascript
// automata generation
[ 
  // year in a generation
  [     
    //individual cell
    { state: 1, right: 0, left: 1  },
    { state: 0, right: 1, left: 1  },
  ],
  [ 
    { state: '1', right: '1', left: '1'  },
    { state: '1', right: '1', left: '1'  },
  ],
  [ 
    { state: '0', right: '0', left: '0'  },
    { state: '0', right: '0', left: '0'  },
  ]
]

```

# Install

```bash
npm install olivaw
```
