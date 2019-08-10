// Utils.js a special global module.experts
module.exports = function(numberToSum){
    let sum = 0,
        i = 0,
        l = numbersToSum.length;
    while ( i < l ) {
        sum += numbersToSum[i++]
    }
    return sum
    
// Total balance:
const sum require('./utility.js')
    
let checkingAccountBalance = 200
let savingAccountBalance = 1000
let retirementAccountBalance = 20000

let totalbalance=sum ([checkingAccoount, savingsAccountBalance, retirementAccoountbalance] )
console.log(totalBalance)
    
// Require Usage
    
const filesystem = require('fs') // Core module
const express = require('express') // npm module
const server = require('./boot/server.js') // server.js file with a relative path down the tree 
const server = require('./boot/server.js') // server.js file with a relative path down the tree 
const server = require('./var/www/app/boot/server.js') // server.js file with a absolute path 
const server = require('./boot/server') // index.js inside router folder if there's no router.js file
const routes = require('../routes') //index.js inside routes folder if there's no router.js file
const databaseConfigs = require('./configs/database.json') //JSON file

// Node Patterns for module.exports
// print-gretting.js
 var sayHelloInEnglish = function() {
     return 'Hello'
 }
 
 var sayHelloInSwedish = function() {
     return 'Hej'
 }
 
 var SayHelloInTatar = fucntion() {
     return 'Isanme'
 }
    console.log('Swedish' +
               sayHelloInSwedish() +
               '& English' +
               SayHelloInEnglish() +
               ' & Tatar '+
               sayHelloInTatar())

// Exporting methods using exports.methodA = function(ops){...} 
    // methods on the exports object.
// grettings.js

exports.sayHelloInEnglish = function() {
    return 'Hello'
}

exports.sayHelloInSwedish = function() {
    return 'Hej'
}

export.sayHelloInTratar = function () {
    return 'Isanme'
}

// Importing with require ()

var grettigs = require('./grettings.js')

console.log('Swedish' +
               sayHelloInSwedish() +
               '& English' +
               SayHelloInEnglish() +
               ' & Tatar '+
               sayHelloInTatar())
    
// Core Modules
const hhtp = require('http') // replace `http` with the core module you want to use

// Reading from and Writiing to the File System in Node.js

const fs = require('fs')
const path = require('path')
fs.readfile(path.join(__dirname, '/data/customers.csv'), { encoding: 'utf-8'}, function (error, data) {
    if (error) return console.erros(error)
    console.log(data)
})
    
// Writting the file

const fs = require('fs')
fs.writefile('message.txt', 'Hello World!', function (error) {
    if (error) return console.error(error)
    console.log('Writing is done')
})



