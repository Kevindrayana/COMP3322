/* =============  DO NOT MODIFY ============>> */

var express = require('express');
var app = express();

app.use(express.json());

var monk = require('monk');
var db = monk('127.0.0.1:27017/lab5-db');

app.use(express.static('public'), function(req,res,next){	
    req.db = db;
    next();
})

app.get('/', (req, res) => {    
    res.sendFile( __dirname + "/public/" + "form.html" );
});

/* <<============  DO NOT MODIFY ============= */

// step 4.1
app.get('/get_form', (req, res) => {    
    





});


// step 5.1
app.post('/update_score', express.urlencoded({ extended: true }), (req, res) => {    
    





});


// launch the server with port 8081
var server = app.listen(8081, () => {
	var host = server.address().address
	var port = server.address().port
	console.log("lab5 app listening at http://%s:%s", host, port)
});

