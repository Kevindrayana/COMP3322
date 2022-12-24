var conn = new Mongo();
var db = conn.getDB("lab5-db");

var section_1 = ["WWW", "HTML", "CSS"];
var section_2 = ["JavaScript", "Nodejs", "JQuery"];
var section_3 = ["MongoDB", "React", "MERN"];

db.topicList.remove({});

insertSection(section_1, 1);
insertSection(section_2, 2);
insertSection(section_3, 3);

function insertSection(section, id){
    for(let i = 0; i < section.length; i++){
        db.topicList.insert(
            {
                'name':section[i],
                'section':`section-${id}`,
                'score': 0
            }
        )
    }
}