$(document).ready(function () {
    showAllTopics()
});


// step 7.2
function showAllTopics() {
    var table_content = `
        <tr><th>Topic Name</th>
        <th>Study Hour</th>
        <th>Chosen Status</th>
        <th>Operation</th></tr>
    `

    $.getJSON('/users/get_table', (data, status) => {
        $.each(data, (index, value) => {
            table_content += `
                <tr class=${value.status == 'yes' ? 'highlight' : ''}>
                    <td>${value.name}</td>
                    <td>${value.hour}</td>
                    <td>${value.status}</td>
                    <td><a href="#" class="operation" rel="${value._id}">${value.status == 'yes' ? 'remove' : 'add'}</a></td>
                </tr>
            `
        })
        $('#plan_table').html(table_content);
    })
}

$("#plan_table").on('click', '.operation', operateTopic)

// step 8.2
function operateTopic(event) {
    event.preventDefault()

    var _id = $(this).attr('rel');
    var operation = $(this).html();

    $.ajax({
        method: "PUT",
        url: "/users/update_status",
        data: { _id: _id, op: operation },

    }).done(function (response) {
        alert(response);
        console.log('response: ', response);
        showAllTopics();
    });
}

$("#submit_delete").on('click', deleteTopic)


// step 9.2
function deleteTopic(event) {
    event.preventDefault()

    let topic_name = $("#input_name").val();
    let lst = $(`td:contains("${topic_name}")`)

    if (lst.length != 0) {
        $.ajax({
            method: "DELETE",
            url: "/users/delete_topic/" + topic_name,
        }).done(function (response) {
            alert(response);
            console.log('response: ', response);
            showAllTopics();
        });
    } else {
        alert('No such topic in the table!')
    }
}