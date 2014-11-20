var express = require('express')
var appOne = express()
var appTwo = express()
var http = require('http')
var path = require('path')
var Promise = require('promise')



//---------------- Server One, on port 3000, -------------------------//


var serverOne = http.createServer(appOne)

appOne.set('views', __dirname + '/views');
appOne.set('view engine', 'html')
appOne.engine('html', require('ejs').renderFile)

serverOne.listen(3000, function() {
  console.log('Im serverOne listening at port 3000')
})

appOne.get('/', function(req, res) {
  res.render('indexOne.html')
})

// ---------------- Server One, on port 5000, -------------------------//

var serverTwo = http.createServer(appTwo)

appTwo.set('views', __dirname + '/views');
appTwo.set('view engine', 'html')
appTwo.engine('html', require('ejs').renderFile)

serverTwo.listen(5000, function() {
  console.log('Im serverTwo listening at port 5000')
})

appTwo.get('/', function(req, res) {
  res.render('indexTwo.html')
})

// ---------------- Interacction between servers -------------------------//