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
const topicList = db.get('topicList');

// step 4.1
app.get('/get_form', (req, res) => {     
    topicList.find({}, {sort: {name: 1}})
        .then(docs => res.json(docs)); 
});


// step 5.1
app.post('/update_score', express.urlencoded({ extended: true }), (req, res) => {    
    topicList.update(
        {'name': req.body.name}, 
        {$set:{'score':parseInt(req.body.score)}},
        function (error, result){
            if (error == null){
                res.json({msg: "Successfully submitted the form!"})
            }else{
                res.json({msg: error})
            }
        })
});


// launch the server with port 8081
var server = app.listen(8081, () => {
	var host = server.address().address
	var port = server.address().port
	console.log("lab5 app listening at http://%s:%s", host, port)
});

