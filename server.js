var express = require('express');
var path = require('path');
var bodyParse = require('body-parser');

var app = express();

// Set Port
app.set('port', (process.env.PORT || 3000));

// Set static path
app.use(express.static(path.join(__dirname, 'client')));

// BodyParser Middleware
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));

// Start the server
app.listen(app.get('port'), function() {
	console.log('Server has started on Port: ' + app.get('port'));
});