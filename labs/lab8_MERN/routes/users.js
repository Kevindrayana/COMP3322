var express = require('express')
var router = express.Router()

router.get('/', (req, res) => { 
    res.send("sss")
});

// step 7.1
router.get('/get_table', (req, res) => { 
    var db = req.db
    var col = db.get('topicList')

    col.find({},{}).then((docs) => {
      	res.json(docs)
    }).catch((err)=>{
        res.send({msg: err});
    });
});


// step 8.1
router.put('/update_status', (req, res) => { 
    var db = req.db
    var col = db.get('topicList');
	
	var status = (req.body.op == 'add')? "yes" : "no"

	col.update({_id: req.body._id}, {$set:{status: status}}).then((docs)=>{
		res.send("Successfully updated!")
	}).catch((err)=>{
		res.send(err);
	})
});


// step 9.1
router.delete('/delete_topic/:name', (req, res) => {
    var db = req.db
    var col = db.get('topicList')

    var topic_name = req.params.name;
    col.remove({name: topic_name}).then((docs)=>{
		res.send("Successfully deleted!")
	}).catch((err)=>{
		res.send(err)
	})
});


module.exports = router;
