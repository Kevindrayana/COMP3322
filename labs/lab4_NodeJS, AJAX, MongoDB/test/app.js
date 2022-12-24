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
  if (req.session.loginName){
    res.sendFile(__dirname + "/public/" + "comment.html");
  }
  res.sendFile(__dirname + "/public/" + "login.html");

});

// step 5
app.post('/login_post', express.urlencoded({ extended: true }), (req, res) => {
	let db = req.db
	let collection = db.get('userList')

	let name = req.body.name;
	let password = req.body.password;

	collection.find({username: name})
		.then((docs) => {
			// console.log(docs[0])
			if (docs.length != 0 && docs[0].password == password){
				req.session.loginName = name;
				res.sendFile(__dirname + "/public/" + "comment.html")
			}else{
				res.sendFile(__dirname + "/public/" + "fail.html")
			}
		});

});

// step 6.2
app.get('/get_user', (req, res) => {
	let response = req.session.loginName;
	res.send(response);
});


// step 6.3
app.get('/logout', (req, res) => {
	req.session.loginName = null;
	res.redirect('/');
});


// step 7.2
app.get('/get_table', (req, res) => {
	var response = "";	
	response +=  "<tr><th>Topic</th>";
	response += "<th>Comment</th></tr>";

	let db = req.db
	let collection = db.get('userList')

	collection.find({username: req.session.loginName})
		.then((docs) => {
			// console.log(docs[0].comments);
			let comments = docs[0].comments;
			let keys = Object.keys(comments);
			// console.log(keys)

			for (let i = 0; i < keys.length; i++){
				response +=  `<tr><td ondrop="drop(event)" ondragover="allowDrop(event)">${keys[i]}</td>`;
				response += `<td ondrop="drop(event)" ondragover="allowDrop(event)">${comments[keys[i]]}</td></tr>`;
			}

			// console.log(response);
			res.send(response)
		});
});

// step 8.3
app.post('/comment_post', express.urlencoded({ extended: true}), (req, res) => {
	let db = req.db
	let collection = db.get('userList')

	let topic = req.body.topic
	let comment = req.body.comment

	collection.find({username: req.session.loginName})
		.then((docs) => {
			let new_comments = {
				...docs[0].comments,
				[topic]: comment
			};
			// console.log(new_comments)
			return collection.update({username: req.session.loginName}, {$set: {comments: new_comments}})
		})
		.then(() => {
			let response = "Successfully commented!"
			res.send(response);
		})
		.catch((err) => {
			res.send(err);
		})
	
});

var server = app.listen(8081, () => {
	var host = server.address().address
	var port = server.address().port
	console.log("lab4 app listening at http://%s:%s", host, port)
});

