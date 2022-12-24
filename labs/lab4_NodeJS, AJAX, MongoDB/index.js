// step 6.1
function init(){
    







    displayTable();
}

// step 7.1
function displayTable(){
    





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
    




    

    var topic = ev.target.parentNode.children[0].innerHTML;
    



    
}