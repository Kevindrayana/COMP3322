$(document).ready(function() {
    showAllTopics()
});


// step 7.2
function showAllTopics(){
    var table_content = `
        <tr><th>Topic Name</th>
        <th>Study Hour</th>
        <th>Chosen Status</th>
        <th>Operation</th></tr>
    `

    $.getJSON('/users/get_table').then((docs)=>{
        $.each(docs, function(i, row){
            if(row.status == 'yes'){
                row_class = "highlight"
                row_operation = "remove"
            }else{
                row_class = ""
                row_operation = "add"
            }

            table_content += `
                <tr class=${row_class}><td>${row.name}</td>
                <td>${row.hour}</td>
                <td>${row.status}</td>
                <td><a href="#" class="operation" rel="${row._id}">${row_operation}</a></td></tr>
            `
        })
        $('#plan_table').html(table_content)
    })
}

$("#plan_table").on('click', '.operation', operateTopic)

// step 8.2
function operateTopic(event){
    event.preventDefault()
    
    var id = $(this).attr('rel')
    var op = $(this).html()

    $.ajax({
        type: 'PUT',
        url: '/users/update_status',
        data: {
            _id: id,
            op: op
        }        
    }).done(function(msg){
        alert(msg);
        showAllTopics()
    });
}

$("#submit_delete").on('click', deleteTopic)


// step 9.2
function deleteTopic(event){
    event.preventDefault()

    var topic_name = $("#input_name").val()
    if($(`td:contains("${topic_name}")`).length != 0){
        $.ajax({
            type: 'DELETE',
            url: '/users/delete_topic/' + topic_name
        }).done(function(msg){
            alert(msg);
            showAllTopics();
        });
    }else alert("No such topic in the table!")
}