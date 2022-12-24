/* =============  DO NOT MODIFY ============>> */

$(document).ready(function() {
    showEvalForm();
});

function isInputValid(){
    var checked = true
    $('.score').each(function(){
        var number = parseInt($(this).val())
        if(isNaN(number) || number < 0 || number > 10) 
            checked = false;
    });
    return checked;
}

var record_list

/* <<=============  DO NOT MODIFY ============ */

// step 4.2
function showEvalForm(){
    var table_content = `
        <tr><th>Topic Name</th>
        <th>Section</th>
        <th>Score</th></tr>
    `

    







}

// step 5.2
function submitForm(event){  
    event.preventDefault();
    
    if(isInputValid()){
        










    }else{
        alert("Input not valid!")
    }
}
