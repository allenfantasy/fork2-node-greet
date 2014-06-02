command = ->
  argv = require('minimist')(process.argv.slice 2)
  greet = require "../lib/index"
  console.log greet argv._[0], argv.drunk

module.exports = command
