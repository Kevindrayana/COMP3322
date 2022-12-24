db.userList.insertMany([
    {'username': 'Tom', 'password': '123456', 'friends':['Kevin', 'Amy', 'Jack']},
    {'username': 'Kevin', 'password': '123', 'friends':['Tom', 'Amy', 'Jack']},
    {'username': 'Amy', 'password': '1234', 'friends':['Kevin', 'Tom', 'Jack']},
    {'username': 'Jack', 'password': '12345', 'friends':['Kevin', 'Amy', 'Tom']}
])

db.mediaList.insertMany([
    {'url': 'http://localhost:8081/media/1.jpg', 'userid': '636cd1c8e88f09defa72f883', 'likedby':['Kevin', 'Amy']},
    {'url': 'http://localhost:8081/media/2.mp4', 'userid': '636cd1c8e88f09defa72f883', 'likedby':[]},
    {'url': 'http://localhost:8081/media/3.jpg', 'userid': '636cd1c8e88f09defa72f883', 'likedby':['Kevin', 'Amy', 'Jack']},
    {'url': 'http://localhost:8081/media/4.jpg', 'userid': '636cd1c8e88f09defa72f883', 'likedby':['Kevin']},
    {'url': 'http://localhost:8081/media/5.jpg', 'userid': '636cd1c8e88f09defa72f883', 'likedby':['Kevin', 'Amy']},
    {'url': 'http://localhost:8081/media/6.mp4', 'userid': '636cd1c8e88f09defa72f884', 'likedby':['Jack', 'Amy']},
    {'url': 'http://localhost:8081/media/7.jpg', 'userid': '636cd1c8e88f09defa72f884', 'likedby':['Tom', 'Amy']},
    {'url': 'http://localhost:8081/media/8.jpg', 'userid': '636cd1c8e88f09defa72f884', 'likedby':['Jack', 'Amy']},
    {'url': 'http://localhost:8081/media/9.jpg', 'userid': '636cd1c8e88f09defa72f884', 'likedby':['Tom', 'Amy']},
    {'url': 'http://localhost:8081/media/10.mp4', 'userid': '636cd1c8e88f09defa72f884', 'likedby':['Amy']},
    {'url': 'http://localhost:8081/media/11.jpg', 'userid': '636cd1c8e88f09defa72f885', 'likedby':[]},
    {'url': 'http://localhost:8081/media/12.jpg', 'userid': '636cd1c8e88f09defa72f885', 'likedby':[]},
    {'url': 'http://localhost:8081/media/13.jpg', 'userid': '636cd1c8e88f09defa72f885', 'likedby':['Kevin']},
    {'url': 'http://localhost:8081/media/14.mp4', 'userid': '636cd1c8e88f09defa72f885', 'likedby':['Jack']},
    {'url': 'http://localhost:8081/media/15.mp4', 'userid': '636cd1c8e88f09defa72f885', 'likedby':['Kevin', 'Tom']},
    {'url': 'http://localhost:8081/media/16.mp4', 'userid': '636cd1c8e88f09defa72f886', 'likedby':['Kevin', 'Amy']},
    {'url': 'http://localhost:8081/media/17.jpg', 'userid': '636cd1c8e88f09defa72f886', 'likedby':['Kevin', 'Amy', 'Tom']},
    {'url': 'http://localhost:8081/media/18.jpg', 'userid': '636cd1c8e88f09defa72f886', 'likedby':['Kevin', 'Amy', 'Tom']},
    {'url': 'http://localhost:8081/media/19.jpg', 'userid': '636cd1c8e88f09defa72f886', 'likedby':['Kevin']},
    {'url': 'http://localhost:8081/media/20.mp4', 'userid': '636cd1c8e88f09defa72f886', 'likedby':['Amy']},
    {'url': 'http://localhost:8081/media/21.jpg', 'userid': '636cd1c8e88f09defa72f883', 'likedby':['Amy']},
    {'url': 'http://localhost:8081/media/22.jpg', 'userid': '636cd1c8e88f09defa72f884', 'likedby':['Amy']},
    {'url': 'http://localhost:8081/media/23.jpg', 'userid': '636cd1c8e88f09defa72f885', 'likedby':['Amy']},
    {'url': 'http://localhost:8081/media/24.jpg', 'userid': '636cd1c8e88f09defa72f886', 'likedby':['Amy']},
])

db.mediaList.insert({'url': 'http://localhost:8081/media/1.jpg', 'userid': 'xxxxxxx', 'likedby':['Kevin', 'Amy']})