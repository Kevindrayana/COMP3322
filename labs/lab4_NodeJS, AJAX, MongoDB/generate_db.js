/* Step 3. Insert User Entries */
var conn = new Mongo();
var db = conn.getDB("lab4-db");

var usernames = ["Alice", "Bob", "Jack"]
var passwords = ["password1", "password2", "password3"]
var comments_init = {
    "WWW Basics": "",
    "HTML/CSS": "",
    "JavaScript": "",
    "Node.js": "",
    "ReactJS": ""
}

db.userList.remove({});

for(let i=0; i < usernames.length; i++) {
    db.userList.insert(
        {
            'username':usernames[i], 
            'password':passwords[i],
            'comments':comments_init,
        }
    )
}