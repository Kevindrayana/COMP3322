import React from 'react'
import ReactDOM from 'react-dom/client';
import './style.css';
import logoImg from "./logo.png";
import $ from 'jquery';

// Static React component defined as function
function Header() {
    return (
        <header>
            <img src={logoImg} alt="logo" width="128" height="128" />
            <h1>Course Study Plan<br /><span className='subtitle'>COMP3322A Modern Technologies on World Wide Web</span></h1>
        </header>
    )
}

function Footer() {
    return <footer><div><a href="#">Back to top</a></div></footer>
}

function Instruction() {
    return (
        <React.Fragment>
            <h2>Instruction</h2>
            <ul>
                <li>Add/Remove a topic to/from your study plan by clicking the respective operation.</li>
                <li>Delete a topic permanently by typing its name into the input box and clicking the "Delete" button.</li>
            </ul>
        </React.Fragment>
    )
}

function PlanTableRow(props) {
    let row_class, row_operation

    if (props.status === 'yes') {
        row_class = "highlight"
        row_operation = "remove"
    } else {
        row_class = ""
        row_operation = "add"
    }

    // Step 11: Complete the function PlanTableRow
    return (
        <tr className={row_class}>
            <td>{props.name}</td>
            <td>{props.hour}</td>
            <td>{props.status}</td>
            <td><a href="#" className={row_class} rel={props._id} onClick={(e) => {e.preventDefault(); props.operateTopic(props._id, row_operation)}}>{row_operation}</a></td>
        </tr>
    )


}

function PlanTable(props) {
    return (
        <table id="plan_table">
            <tr>
                <th>Topic Name</th>
                <th>Study Hour</th>
                <th>Chosen Status</th>
                <th>Operation</th>
            </tr>
            {
                props.topicInfo.map(row => <PlanTableRow
                    // Step 12: fill in the missing attributes to PlanTableRow
                    _id={row._id}
                    name={row.name}
                    hour={row.hour}
                    status={row.status}
                    operateTopic={props.operateTopic}


                    // key is a special attribute React uses to identify list components
                    key={row._id} />
                )
            }
        </table>
    )
}

class DeleteForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputTopicName: ""
        }
    }

    handleInputChange(event) {
        this.setState({ inputTopicName: event.target.value })
    }

    deleteTopic() {
        // Step 13: Complete the function deleteTopic
        this.props.deleteTopic(this.state.inputTopicName)

    }

    render() {
        return (
            <div id="delete_div">
                <p>Fill in a topic name to delete it from the table permanently:</p>
                <input
                    id="input_name"
                    placeholder="topic name"
                    value={this.state.inputTopicName}
                    onChange={this.handleInputChange.bind(this)} />
                <button onClick={this.deleteTopic.bind(this)}>Delete</button>
            </div>
        )
    }
}

class PlanPage extends React.Component {
    constructor(props) {
        // Step 8: Implement the constructor of PlanPage
        super(props);
        this.state = {
            topicInfo: [],
        }
    }

    componentDidMount() {
        // Step 10: Invoke updateTopics() upon page loading
        this.updateTopics()
    }

    updateTopics() {
        // Step 9: Implement the controller function

        $.getJSON('http://localhost:3001/users/get_table', (data, status) => {
            this.setState({ topicInfo: data });
        })
    }

    operateTopic(_id, op) {
        // Step 9: Implement the controller function
        // event.preventDefault()

        $.ajax({
            type: 'PUT',
            url: 'http://localhost:3001/users/update_status',
            data: {
                _id: _id,
                op: op
            }
        })
        .done(function (msg) {
            alert(msg);
            this.updateTopics()
        }.bind(this));
    }

    deleteTopic(topicName) {
        // Step 9: Implement the controller function
        // event.preventDefault()
        let bool = false;
        console.log(this.state.topicInfo)
        this.state.topicInfo.forEach(element => {
            if (element.name === topicName){
                bool = true;                
            }
        });

        if (bool) {
            $.ajax({
                type: 'DELETE',
                url: 'http://localhost:3001/users/delete_topic/' + topicName
            }).done(function (msg) {
                alert(msg);
                this.updateTopics();
            }.bind(this))
        } else alert("No such topic in the table!")
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <section className="contents">
                    <Instruction />
                    <hr />
                    <h2>Topic Plan</h2>
                    <PlanTable
                        topicInfo={this.state.topicInfo}
                        operateTopic={this.operateTopic.bind(this)}
                    />
                    <DeleteForm deleteTopic={this.deleteTopic.bind(this)} />
                </section>
                <Footer />
            </React.Fragment>
        )
    }
}

export default PlanPage