var express = require('express');
var app = express();

var monk = require('monk');
var db = monk('localhost:27017/assignment1');

var cookieParser = require('cookie-parser');


app.use(cookieParser())

//make db accessible to router
app.use(function(req,res,next){
  req.db = db;
  next();
})

//middleware to serve requests for static files in the public folder
app.use(express.static('public'));




// *** ROUTING *** //
//home dir
app.get('/', function (req, res) {
  res.sendFile(__dirname + "/public/" + "albums.html");
})

app.get('/load', (req, res) => {
  var db = req.db;
  var userList = db.get('userList');

  var jsonResult = { //this is the JSON format
    username: '',
    friends: '',
    friends_id: []
  }

  if (req.cookies.user_id){ //check if user_id cookie has been set
    userList.findOne({"_id": req.cookies.user_id})
      .then(async (result) => {
        jsonResult.username = result.username;
        jsonResult.friends = result.friends
        for (let friend of jsonResult.friends){
          let data = await userList.findOne({"username" : friend})
          jsonResult.friends_id.push(data._id)
        }
        res.send(JSON.stringify(jsonResult));
      })
      .catch((err) => {
        console.error(err)
      });

  }else{ // if user_id cookie has not been set
    res.send('');
  }
})

app.get("/test", (req, res) => {
  var db = req.db;
  var userList = db.get('userList');
  var jsonResult = { //this is the JSON format
    username: '',
    friends: '',
    friends_id: []
  }
  userList.findOne({username: "Kevin"})
    .then(async (result) => {
      jsonResult.username = result.username;
      jsonResult.friends = result.friends
      for (let friend of jsonResult.friends){
        let data = await userList.findOne({"username" : friend})
        jsonResult.friends_id.push(data._id)
      }
      res.send(jsonResult)
    })
})

app.post('/login', express.urlencoded({ extended: true }), (req, res) => {
  var db = req.db;
  var userList = db.get('userList');
  
  var name = req.body.loginName;
  var pwd = req.body.loginPassword;

  userList.findOne({"username": name, "password": pwd})
    .then(async (result) => {
      if (result){
        res.cookie("user_id", result._id, {maxAge: 30*60*60});

        let jsonResult = { // this is the JSON format
          username: name,
          friends: result.friends,
          friends_id: []
        }
        for (let friend of jsonResult.friends){
          let data = await userList.findOne({"username" : friend})
          jsonResult.friends_id.push(data._id)
        }
        res.send(jsonResult);

      }else{
        res.send("Login Failure")
      }
    })
})

app.get('/test1', function (req, res) {
  var db = req.db;
  var userList = db.get('userList');
  
  userList.findOne({"username": "Kevin", "password": "123"})
    .then(async (result) => {
      if (result){

        res.cookie("user_id", result._id, {maxAge: 30*60})

        let jsonResult = { // this is the JSON format
          friends: result.friends,
          friends_id: []
        }
        for (let friend of jsonResult.friends){
          let data = await userList.findOne({"username" : friend})
          jsonResult.friends_id.push(data._id)
        }
        res.send(jsonResult);
      }
    })
})

app.get('/logout', (req, res) => {
  res.clearCookie('user_id');
  res.send('');
})

app.get('/getalbum', (req, res) => {
  var db = req.db;
  var mediaList = db.get('mediaList');
  
  let id = req.query['userid'];
  let pagenum = req.query['pagenum']
  
  if (id == "0"){ // own album
    mediaList.find({"userid" : req.cookies.user_id}, {fields : { userid : 0 }})
      .then((result) => {

        let pagenum = Math.ceil(result.length / 4)
        res.send({result, pagenum : pagenum})
        
      })
  } else{ // friend's album
    mediaList.find({"userid" : id}, {fields : { userid : 0 }})
    .then((result) => {
      let pagenum = Math.ceil(result.length / 4)
      res.send({result, pagenum : pagenum})
    })
  }
})

app.get('/test2', (req, res) => {
  var db = req.db;
  var mediaList = db.get('mediaList');
  
  let id = req.query['userid']
  let pagenum = req.query['pagenum']
  
  if (id == "0"){ // own album
    mediaList.find({"userid" : `636cd1c8e88f09defa72f884`}, { fields : { userid : 0 }})
      .then((result) => {

        let pagenum = Math.ceil(result.length / 4)
        res.send({result, pagenum : pagenum})
        
      })
  } 
  else{ // friend's album
    mediaList.find({"userid" : id})
    .then((result) => {
      let pagenum = Math.ceil(result.length / 4)
      res.send({result, pagenum : pagenum})
    })
  }
});

app.post('/postlike', express.urlencoded({ extended: true }), (req, res) => {
  var db = req.db;
  var mediaList = db.get('mediaList');
  var userList = db.get('userList');

  let photovideoid = req.body.photovideoid;
  let id = req.cookies.user_id

  mediaList.findOne({_id: photovideoid})
    .then(async (docs) => {
      let data = await userList.findOne({_id: id});
      if (docs.likedby.indexOf(data.username) == -1){
        let newData = [...docs.likedby, data.username];
        let result = await mediaList.findOneAndUpdate({'likedby': docs.likedby}, {$set:{'likedby': newData}});
        res.send(result.likedby);
        return;
      }
      // mediaList.update({likedby: docs.likedby}, {$set:{'likedby': docs.likedby.push(data.username)}})
      res.send(docs.likedby)
    })
})

app.get('/test3', (req, res) => {
  var db = req.db;
  var mediaList = db.get('mediaList');
  var userList = db.get('userList');

  // let photovideoid = req.body.photovideoid;
  // let id = req.cookies.user_id

  mediaList.findOne({_id: "636cd331e88f09defa72f89a"})
    .then(async (docs) => {
      let data = await userList.findOne({_id: '636cd1c8e88f09defa72f885'});
      if (docs.likedby.indexOf(data.username) == -1){
        docs.likedby.push(data.username);
      }
      // mediaList.findOneAndUpdate({'likedby': docs.likedby}, {$set:{'likedby': docs.likedby.push(data.username)}})
      //   .then((docs) => {res.send(docs.likedby)})
      // res.send(docs.likedby);
      let newData = [...docs.likedby, data.username]
      let result = await mediaList.findOneAndUpdate({'likedby': docs.likedby}, {$set:{'likedby': newData}})
      res.send(result);
    })
    
})


var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
})