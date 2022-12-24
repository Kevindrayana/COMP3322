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
    $.getJSON("/get_form", function(result){
        record_list = result;
        $.each(result, function(index, value){
            // console.log(index, value);
            let table_data = `
            <tr>
                <td>${value.name}</td>
                <td>${value.section}</td>
                <td><input id=${value.name} class="score" type="number" value=${value.score} min=0 max=10></td>
            </tr>
            `;
            table_content += table_data;
        })

        $('#evaluate_table').html(table_content);
        $('#div_button').append(`<button onClick="submitForm(event)">Submit</button>`)
    })
    
}

// step 5.2
function submitForm(event){  
    event.preventDefault();

    if(isInputValid()){
        // console.log(record_list);
        for (let i = 0; i < record_list.length; i++){
            record_list[i].score = $(`#${record_list[i].name}`).val();
            $.post("/update_score", record_list[i])
        }

        fetch("/update_score", {method: "POST"})
            .then(res => res.json())
            .then(data => alert(data.msg))

    }else{
        alert("Input not valid!")
    }
}
