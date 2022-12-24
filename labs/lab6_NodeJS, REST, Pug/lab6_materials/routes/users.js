var express = require('express')
var router = express.Router()



// step 7.1
router.get('/get_table', (req, res) => {
    var topicList = req.db.get('topicList');

    topicList.find().then((data) => res.json(data));
});


// step 8.1
router.put('/update_status', (req, res) => {
    var topicList = req.db.get('topicList');
    var new_status = req.body.op == 'add' ? 'yes' : req.body.op == 'remove' ? 'no' : ''
    topicList.update({ '_id': req.body._id }, { $set: { status: new_status } })
        .then(() => res.send('Successfully updated!'))
        .catch((err) => res.send(err));
});


// step 9.1
router.delete('/delete_topic/:name', (req, res) => {
    var topicList = req.db.get('topicList');
    topicList.remove({'name': req.params.name})
        .then(() => {res.send('Successfully deleted!')})
        .catch((err) => {res.send(err)})
});



module.exports = router;
