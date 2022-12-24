/* =============  DO NOT MODIFY ============>> */


var express = require('express');
var app = express();
var monk = require('monk');
var db = monk('127.0.0.1:27017/lab4-db');

var session = require('express-session');

// make db accessible to router
app.use(function(req,res,next){
    req.db = db;
    next();
})

// use middleware
app.use(session({
  	secret: 'random_string_goes_here', 
	resave: false,
	saveUninitialized: true
}));

app.use(express.static('public'));

/* <<============  DO NOT MODIFY ============= */

// step 4
app.get('/', (req, res) => {




});

// step 5
app.post('/login_post', express.urlencoded({ extended: true }), (req, res) => {
	



});

// step 6.2
app.get('/get_user', (req, res) => {
	


});


// step 6.3
app.get('/logout', (req, res) => {
	



});


// step 7.2
app.get('/get_table', (req, res) => {
	var response = "";	
	response +=  "<tr><th>Topic</th>";
	response += "<th>Comment</th></tr>";

	




});

// step 8.3
app.post('/comment_post', express.urlencoded({ extended: true}), (req, res) => {
	




	
});

var server = app.listen(8081, () => {
	var host = server.address().address
	var port = server.address().port
	console.log("lab4 app listening at http://%s:%s", host, port)
});

