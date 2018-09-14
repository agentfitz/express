
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var shuffle = require('shuffle-array');
var mysql = require('mysql');


app.get('/', function(request, response) {

	response.send('hello world');

});

app.listen(3000, function() {
	console.log('I\'m listening on port 3000');
});

// var connection = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	password: '@Tinpony70!',
// 	// password: 'bf2321',
// 	database: 'mcu'
// });
// var app = express();


// connection.connect();

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// // Body Parser Middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// // Set static path
// app.use(express.static(path.join(__dirname, 'public')));


// app.get('/', function(request, response) {

// 	connection.query('select * from characters', function(error, results, fields) {

// 		if (error) throw error;

// 		shuffle(results);

// 		response.render('index', {
// 			title: 'MCU Characters',
// 			characters: results
// 		});

// 	});

// });

// app.get('/movies', function(request, response) {

// 	connection.query('select * from movies', function(error, results, fields) {

// 		if (error) throw error;

// 		response.render('movies', {
// 			title: 'MCU Movies',
// 			movies: results
// 		});

// 	});

// });

// app.listen(3000, function() {
// 	console.log('I\'m listening on port 3000');
// });