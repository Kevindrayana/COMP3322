var express = require('express');
var router = express.Router();

router.post('/signin', async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    
    const db = req.db;
    var userList = db.get('userList');
    var noteList = db.get('noteList')

    let user = await userList.find({name: username, password: password});
    
    if (user.length != 0){
        req.session.userId = (user[0]._id).toString();
        console.log('user loged in with req.session.userid = ', req.session.userId)
        
        try {
            let notes = await noteList.find({userId: req.session.userId}, {fields: {_id: 1, lastsavedtime: 1, title: 1}});
            notes.sort((a, b) =>  Number(string_to_time(b.lastsavedtime)) - Number(string_to_time(a.lastsavedtime)));
            let jsonResult = {
                _id: req.session.userId,
                name: user[0].name,
                icon: user[0].icon,
                notesInfo: [...notes]
            }
            res.json(jsonResult);
            // example JSON format: 
            // {
            //     "name": "Andy",
            //     "icon": "icons/andy.jpg",
            //     "notesInfo": [
            //       {
            //         "_id": "638e3290463ced7e708b1a55",
            //         "lastsavedtime": "20:12:10 Tue Nov 15 2022",
            //         "title": "assignment1"
            //       }
            //     ]
            // }

        } catch (error) {
            res.json({error: error})
        }
    } else {
        res.send("Login Failure")
    }
}); 

router.get('/logout', (req, res) => {
    
    console.log("logging out" + req.session.userId)
    req.session.userId = null;

    res.status(200).send('');
});

router.get('/getnote', async (req, res) => {
    const db = req.db;
    var noteList = db.get('noteList');
    let noteid = req.query.noteid;

    try {
        let result = await noteList.find({_id: noteid}, {fields: {lastsavedtime: 1, title: 1, content: 1}});
        res.json(result)
    } catch (error) {
        res.json({error: error})
    }
});

router.post('/addnote', async(req, res) => {
    const db = req.db;
    var noteList = db.get('noteList');
    console.log('user loged in with req.session.userid = ', req.session.userId)
    let title = req.body.title;
    let content = req.body.content;
    let userId = req.session.userId;
    let currTime = time_to_string(new Date());

    let result = await noteList.insert({
        userId: userId,
        lastsavedtime: currTime,
        title: title,
        content: content
    })

    let result1 = await noteList.findOne({lastsavedtime: currTime}, {fields: {_id: 1, lastsavedtime: 1}});
    res.send(result1);

});

router.put('/savenote/:noteid', async (req, res) => {
    const db = req.db;
    var noteList = db.get('noteList');
    
    let noteid = req.params.noteid;
    let title = req.body.title;
    let content = req.body.content;
    let currTime = time_to_string(new Date());
    
    try {
        let result = await noteList.update({_id: noteid}, {$set: {title: title, content: content, lastsavedtime: currTime}})
        res.send(currTime);
    } catch (error) {
        res.send(error);
    }
});

router.get('/searchnotes', async(req, res) => {
    const db = req.db;
    var noteList = db.get('noteList');

    let searchstr = req.query.searchstr;
    let result = await noteList.find({ userId: req.session.userId, $or: [{title: {$regex: searchstr}}, {content: {$regex: searchstr}}]}, {fields : { userId : 0, content: 0 }});
    result.sort((a, b) =>  Number(string_to_time(b.lastsavedtime)) - Number(string_to_time(a.lastsavedtime)));

    res.json(result);
});

router.delete('/deletenote/:noteid', async (req, res) => {
    const db = req.db;
    var noteList = db.get('noteList');
    let noteid = req.params.noteid;
    try {
        await noteList.remove({_id: noteid});
        res.send('');
    } catch (error) {
        res.send(error);
    }
});

function time_to_string(datetime) {
    return datetime.toTimeString().split(' ')[0] + ' ' + datetime.toDateString()
}

function string_to_time(str) {
    return new Date(str.split(' ').slice(1).join(' ') + ' ' + str.split(' ')[0])
}

module.exports = router;
