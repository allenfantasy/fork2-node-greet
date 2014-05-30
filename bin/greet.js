#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
var greet = require('../index')
//console.log("Hello world");
console.log(greet(argv._[0], argv.drunk))
