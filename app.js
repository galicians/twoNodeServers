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


          //-------------- Routes server One ----------------//

appOne.get('/', function(req, res) {
  res.render('indexOne.html')
})

appOne.post('/voting_results/:surveyNumber', function(req, res) {

})


// ---------------- Server One, on port 5000, -------------------------//

var serverTwo = http.createServer(appTwo)

appTwo.set('views', __dirname + '/views');
appTwo.set('view engine', 'html')
appTwo.engine('html', require('ejs').renderFile)

serverTwo.listen(5000, function() {
  console.log('Im serverTwo listening at port 5000')
})

          //-------------- Routes server One ----------------//

appTwo.get('/', function(req, res) {
  res.render('indexTwo.html')
})

appTwo.post('/voting_results/:surveyNumber', function(req, res) {

})

// ---------------- HEADERS & DATA SENT TO SERVER ONE ------------------//

var dataSentToOne = "Im the data sent to serverOne and my length is 49"

var headersSentToOne = {
    path: 'http://localhost:3000/',
    host: 'www.pablo.com',
    "User-Agent": 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:33.0) Gecko/20100101 Firefox/33.0',
    Accept: '/text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    "Accept-Language": 'en-GB,en;q=0.5',
    "Accept-Enconding": 'gzip, deflate',
    Referer: "http://www.marca.com/debate/2014/11/151692/prevotaciones151692.html",
    Cookie: "MAKERS_idusr=VG1NU8CoFyoAAAUkRvI-04773ad3b3f48b785f6718ed03123567; MAKERS_pref=%7B%22v%22%3A%22n%22%2C%22d%22%3A%22e%22%2C%22u%22%3A0%7D; s_cc=true; s_nr=1416449419886-New; ue_privacyPolicy=1; cX_S=14164493876402097384561; cX_P=14164493876412090423558",
    Connection: "keep-alive",
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': "49"
    }
};

// ---------------- HEADERS & DATA SENT TO SERVER TWO ------------------//

var dataSentToTwo = "Im the data sent to serverTwo and my length is 49"

var headersSentToTwo = {
    path: 'http://localhost:3000/',
    host: 'www.pablo.com',
    "User-Agent": 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:33.0) Gecko/20100101 Firefox/33.0',
    Accept: '/text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    "Accept-Language": 'en-GB,en;q=0.5',
    "Accept-Enconding": 'gzip, deflate',
    Referer: "http://www.marca.com/debate/2014/11/151692/prevotaciones151692.html",
    Cookie: "MAKERS_idusr=VG1NU8CoFyoAAAUkRvI-04773ad3b3f48b785f6718ed03123567; MAKERS_pref=%7B%22v%22%3A%22n%22%2C%22d%22%3A%22e%22%2C%22u%22%3A0%7D; s_cc=true; s_nr=1416449419886-New; ue_privacyPolicy=1; cX_S=14164493876402097384561; cX_P=14164493876412090423558",
    Connection: "keep-alive",
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': "49"
    }
};

// ---------------- INTERACTION BETWEEN SERVER ONE & SERVER TWO ------------------//















