
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set static path
app.use(express.static(path.join(__dirname, 'public')));


var users = [
	{
		id: 1,
		name: 'Frankie',
		email: 'frankie@gmail.com'
	},
	{
		id: 2,
		name: 'Ellen',
		email: 'ellen@gmail.com'
	},
	{
		id: 3,
		name: 'Jonas',
		email: 'jonas@gmail.com'
	}
];

app.get('/', function(request, response) {
	
	response.render('index', {
		title: 'Customers',
		users: users
	});

});

app.post('/users/add', function(request, response) {
	
	var newUser = {
		name: request.body.name,
		email: request.body.email
	};

	console.log(newUser);

});

app.listen(3000, function() {
	console.log('I\'m listening on port 3000');
});