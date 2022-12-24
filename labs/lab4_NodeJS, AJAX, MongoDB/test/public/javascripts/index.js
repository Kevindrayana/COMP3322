// step 6.1
function init(){
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", "/get_user", true)

    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            let userName = xmlhttp.responseText;
            document.getElementById("login_user").innerHTML = `${userName}'s Table`;

            let hyperlink = document.createElement("a");
            hyperlink.setAttribute('href', '/logout');
            hyperlink.innerHTML = "Logout"
            document.getElementById("nav_out").appendChild(hyperlink)
        }
    }

    xmlhttp.send();

    displayTable();
}

// step 7.1
function displayTable(){
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", "/get_table", true);

    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            document.getElementById("evaluate_table").innerHTML = xmlhttp.responseText;
        }
    }

    xmlhttp.send()
}

function drag(ev){
    ev.dataTransfer.setData("text", ev.target.innerHTML);
}

function allowDrop(ev){
    ev.preventDefault();
}

// step 8.2
function drop(ev){
    ev.preventDefault();
    
    ev.target.innerHTML = ev.dataTransfer.getData("text");

    var topic = ev.target.parentNode.children[0].innerHTML;
    
    
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "comment_post", true);

    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xmlhttp.send(`topic=${topic}&comment=${ev.target.innerHTML}`);

    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            alert(xmlhttp.responseText);
        }
    }
}