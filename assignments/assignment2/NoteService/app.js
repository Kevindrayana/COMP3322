var express = require('express');
var path = require('path');
var session = require('express-session');
var logger = require('morgan');
var cors = require('cors');

var monk = require('monk');
var db = monk('127.0.0.1:27017/assignment2');

var notesRouter = require('./routes/notes');

var app = express();

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

var corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Make our db accessible to routers 
app.use(function(req,res,next){
    req.db = db; 
	next();
});

app.use('/', notesRouter);


app.listen(3001);