var conn = new Mongo();
var db = conn.getDB("lab6-db");

var topic_name = ["www", "html", "css", "javascript", "nodejs", "jquery"];
var topic_status = ["no", "no", "no", "no", "no", "no"];
var topic_hour = [2, 4, 4, 6, 10, 6];

db.topicList.remove({});

for(let i = 0; i < topic_name.length; i++){
    db.topicList.insert(
        {
            'name': topic_name[i],
            'hour': topic_hour[i],
            'status': topic_status[i]
        }
    )
}