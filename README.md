# Olivaw

[![Greenkeeper badge](https://badges.greenkeeper.io/lrlna/olivaw.svg)](https://greenkeeper.io/)

A one-dimensional, binary cellular automata library built in ✨  javascript ✨ .

Olivaw allows you to work with any of [Wolfram's elementary automata](https://en.wikipedia.org/wiki/Elementary_cellular_automaton)
by providing one of the 256 rules. 

The concept of one dimensional cellular automata is fascinating and sometimes
might seem quite complex, I've put together an [illustrated guide](https://github.com/lrlna/sketchin/blob/master/guides/automata.md)
to help you understand it better. 

You can also find a working example over at [/cellular-automata](http://lrlna.github.io/cellular-automata)

# Usage

```js
var olivaw = require('olivaw')

var automaton = olivaw({
  rule: 110,
  population: 101,
  life: 500
})

// run the automata
var automata = automaton.set()
```

The output you get is an ndarray (or a nested, multidimensional array) of
automata, where each array is a year in the generation of an automata. It's best
to set the generation to run for over 100 years for more interesting results ✨.

## automaton = olivaw(opts)
Create a new instance of olivaw by providing a set of options. These three
options are required:
- __opts.rule__: one of 256 rules for the automata to follow 
- __opts.population__: the population size, or the number of cells you want to
work with 
- __opts.life__: life span of an automata instance, or the number of years it
will run for 

## olivaw.set()
Sets up and runs your automata through it's life span. Will use the opts of
`rule`, `population`, and `life` that you've provided when you set up olivaw.

Given you have this set up:

```js
var olivaw = require('olivaw')

// set up this instance of olivaw 
var automaton = olivaw({
  rule: 110,
  population: 2,
  life: 3 
})
// run through a generation
var automata = olivaw.set()
```

`olivaw.set` will return the following output that you could then work with to
display or manipulate the data:

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
npm install --save olivaw
```
