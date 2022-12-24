var conn = new Mongo();
var db = conn.getDB("assignment2");

var name_ = ["Andy", "Bob", "Charlie", "Kevin"];
var password_ = ["1", "12", "123", "1234"];
var icon_ = ["icons/andy.jpg", "icons/bob.jpg", "icons/charlie.jpg", "icons/kevin.jpg"];

db.userList.remove({});

db.userList.insertMany([
    {
        'name': "Andy",
        'password': "1",
        'icon': "icons/andy.jpg"
    },
    {
        'name': "Bob",
        'password': "12",
        'icon': "icons/bob.jpg"
    },
    {
        'name': "Charlie",
        'password': "123",
        'icon': "icons/charlie.jpg"
    },
    {
        'name': "Kevin",
        'password': "1234",
        'icon': "icons/kevin.jpg"
    }
])

// ====

db.noteList.remove({});

db.noteList.insert([
    {
        'userId': '6390ac03463ced7e708b1a5f',
        'lastsavedtime': "20:12:10 Tue Nov 15 2022",
        'title': "assignment1",
        'content': "i am content 1"
    },
    {
        'userId': '6390ac03463ced7e708b1a60',
        'lastsavedtime': "20:12:10 Tue Nov 16 2022",
        'title': "assignment2",
        'content': "i am content 2"
    },
    {
        'userId': '6390ac03463ced7e708b1a61',
        'lastsavedtime': "20:12:10 Tue Nov 17 2022",
        'title': "assignment3",
        'content': "i am content 3"
    },
    {
        'userId': '6390ac03463ced7e708b1a62',
        'lastsavedtime': "20:12:10 Tue Nov 18 2022",
        'title': "assignment4a",
        'content': "i am content 4a"
    },
    {
        'userId': '6390ac03463ced7e708b1a62',
        'lastsavedtime': "20:12:10 Tue Nov 18 2022",
        'title': "assignment4b",
        'content': "i am content 4b"
    },
    {
        'userId': '6390ac03463ced7e708b1a62',
        'lastsavedtime': "20:12:10 Tue Nov 18 2022",
        'title': "assignment4c",
        'content': "i am content 4c"
    }
])