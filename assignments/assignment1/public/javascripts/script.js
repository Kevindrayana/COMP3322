function init(){
    let xmlhttp = new XMLHttpRequest();
   
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            
            if (xmlhttp.responseText == ''){
                // display figure 1
            }else{
                // get data
                data = JSON.parse(xmlhttp.responseText);
                // display figure 2
                displayFigure2(data);
            }
        }        
    }
    xmlhttp.open("GET", "/load", true);
    xmlhttp.send();
}

function login(event){
    event.preventDefault();
    
    $(document).ready(function(){
        let username_value = $(".username-input").val();
        let password_value = $(".password-input").val();

        if (!username_value || !password_value){
            alert("Please enter username and password")
            return;
        }else{
            $.post('/login', {loginName: username_value, loginPassword: password_value}, (data) => {
                if (data === 'Login Failure'){
                    alert('Login Failure');
                    return;
                }else{
                    displayFigure2(data);
                    localStorage.setItem(data.username, 0);
                    data.friends.forEach(element => {
                        localStorage.setItem(element, 0)
                    });
                }
            })
        }
    })
}

function logout(event){
    event.preventDefault();
    $.get('/logout', (data) => {
        if (data == ''){
            $('.right').empty();
            $('.left').empty();
            displayFigure1();
            localStorage.clear();
        }
    })
    window.location.reload();
}

function loadAlbum(event, page){
    event.preventDefault();

    $('a').removeClass('highlighted');
    $(event.target).addClass('highlighted')

    $(document).ready(function(){
        if(event.target.innerHTML == "My Album"){
            $.get(`/getalbum?userid=0&pagenum=${page}`, (data) => {
                event.target.user_name = $('#loged-in-user').text();
                event.target._id = getCookie('user_id');
                localStorage.setItem('logedinUser', JSON.stringify({name : event.target.user_name, id: getCookie('user_id')})); 
                localStorage.setItem('currentSessionUser', JSON.stringify({name : event.target.user_name, id: getCookie('user_id')})); 
                loadPicturesAndVideos(event, data, page);
            });
        }else{
            if (event.target.innerHTML == "Tom's Album"){
                event.target.user_name = 'Tom';
                event.target._id = ("636cd1c8e88f09defa72f883");
                localStorage.setItem('currentSessionUser', JSON.stringify({name: 'Tom', id: event.target._id})); 
            }else if (event.target.innerHTML == "Kevin's Album"){
                event.target.user_name = 'Kevin';
                event.target._id = ("636cd1c8e88f09defa72f884");
                localStorage.setItem('currentSessionUser', JSON.stringify({name: 'Kevin', id: event.target._id}));  
            }else if (event.target.innerHTML == "Amy's Album"){
                event.target.user_name = 'Amy';
                event.target._id = ("636cd1c8e88f09defa72f885");
                localStorage.setItem('currentSessionUser', JSON.stringify({name: 'Amy', id: event.target._id}));  
            }else if (event.target.innerHTML == "Jack's Album"){
                event.target.user_name = 'Jack';
                event.target._id = ("636cd1c8e88f09defa72f886");
                localStorage.setItem('currentSessionUser', JSON.stringify({name: 'Jack', id: event.target._id})); 
            }

            let id = JSON.parse(localStorage.getItem('currentSessionUser'))['id'];
            console.log(id);
            
            $.get(`/getalbum?userid=${id}&pagenum=${page}`, (data) => {
                loadPicturesAndVideos(event, data, page);
            });
        }
    });
}

function displayPhotoOrVideo(event){
    $('.right').empty();
    $('.right').append(event.target.parentNode);

    let id = $(event.target).attr('id')
    console.log(id)

    $(`#${id}`).width("576");
    $(`#${id}`).height("384");

    let name = JSON.parse(localStorage.getItem('currentSessionUser'))['name'];
    let myPage = parseInt(localStorage.getItem(name));
    $('.right').append(`<button id="button-X" type="button" onclick="loadAlbum(event, ${myPage})">X</button>`)
}

function handleLike(event){
    event.preventDefault();
    let photovideoid = event.target.className;
    console.log(photovideoid);
    $(document).ready(function(){
        $.post('/postlike', {photovideoid: photovideoid}, (data) => {
            console.log(data);
            $(`#${photovideoid}-likedby`).text(data);
            return;
        })
    })
}

// ***** HELPER FUNCTIONS ***** //


function displayFigure1(){
    $(document).ready(function(){
        $(".username").removeClass("hidden");
        $(".password").removeClass("hidden");
        $(".login-button").removeClass("hidden");
        $(".logout-button").addClass("hidden");
        $(".hello-username").addClass("hidden");
        $(".friends-list").empty();
    })
}

function displayFigure2(data){
    $(document).ready(function(){
        $(".username").addClass("hidden");
        $(".password").addClass("hidden");
        $(".login-button").addClass("hidden");
        $(".logout-button").removeClass("hidden");
        $(".hello-username").html(`<p>hello <span id="loged-in-user">${data.username}</span> </p>`);
        $(".friends-list").append(`<li><a onclick="loadAlbum(event, 0)">My Album</a></li>`)
        for (let i = 0; i < data.friends.length; i++){
            $(".friends-list").append(`<li><a onclick="loadAlbum(event, 0)">${data.friends[i]}'s Album</a></li>`)
        }
    })
}

function getCookie(cname) {
    let name = cname + '=j:"';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length-1);
      }
    }
    return "";
}

function loadPicturesAndVideos(event, data, page){
    let name = JSON.parse(localStorage.getItem('currentSessionUser'))['name'];
    let logedinName = $('#loged-in-user').text();
    $(document).ready(function(){
        $('.right').empty();
        for (let i = 0; i < 4; i++){
            if (i + 4 * page < data.result.length){
                ext =  data.result[i + 4*page].url.split('.').pop();
                if(ext == 'jpg'){
                    $('.right').append(`<div class="${data.result[i + 4*page]._id}"><img onclick="displayPhotoOrVideo(event)" src=${data.result[i + 4*page].url} id=${data.result[i + 4*page]._id} width="320" height="240"></div>`);
                }else if (ext == 'mp4'){
                    $('.right').append(`<div class="${data.result[i + 4*page]._id}"><video onclick="displayPhotoOrVideo(event)" src=${data.result[i + 4*page].url} id=${data.result[i + 4*page]._id} controls width="320" height="240"></div>`);
                }

                if (data.result[i + 4*page].likedby.length != 0){
                    $(`.${data.result[i + 4*page]._id}`).append(`<p><span id="${data.result[i + 4*page]._id}-likedby">${data.result[i + 4*page].likedby}</span> liked the ${ext == 'jpg' ? 'photo' : 'video'}</p>`);
                }else{
                    $(`.${data.result[i + 4*page]._id}`).append(`<p><span id="${data.result[i + 4*page]._id}-likedby">No one</span> liked the ${ext == 'jpg' ? 'photo' : 'video'}</p>`);
                }

                if (name != logedinName){
                    $(`.${data.result[i + 4*page]._id}`).append(`<button type="button" onclick="handleLike(event)" class="${data.result[i + 4*page]._id}">Like</button>`);
                }
            }
        }

        localStorage.setItem(name, page);
        let myPage = parseInt(localStorage.getItem(name));
        
        $('.right').append(`<a class=${page == 0 ? 'unclickable' : 'none'} onclick="loadAlbum(event, ${myPage - 1})">Previous</a>`);
        $('.right').append(`<a class=${page == data.pagenum - 1 ? 'unclickable' : 'none'} onclick="loadAlbum(event, ${myPage + 1})">Next</a>`);
    })
}
