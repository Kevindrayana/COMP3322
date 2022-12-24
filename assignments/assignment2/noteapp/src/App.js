import $ from 'jquery';
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <NoteApp/>
    </div>
  );
}

function NoteApp(){
  const [userInfo, setUserInfo] = useState();
  const [logedIn, setLogedIn] = useState(false);

  const handleUserInfo = (data) => setUserInfo(data);
  const handleLogedIn = (bool) => setLogedIn(bool);

  return(
    <>
      {/* {JSON.stringify(userInfo)} */}
      {!logedIn && <LoginPage
        handleLogedIn={handleLogedIn} 
        handleUserInfo={handleUserInfo}
      />}

      {logedIn && <ContentPage
        userInfo={userInfo}
        handleUserInfo={handleUserInfo}
      />}
    </>
  )
}

function LoginPage(props){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  function handleSignIn(){

    $.ajax({
      type: 'POST',
      url: 'http://localhost:3001/signin',
      data: {
          username,
          password
      },
      xhrFields: { withCredentials: true },
    })
    .done(function (msg) {
        if (msg !== "Login Failure"){
          props.handleLogedIn(true);
          props.handleUserInfo(msg);
        }
        setErrorMsg(msg)
    })
    
  }
  return(
    <div id='loginPage'>
      <header>
        <h1>iNotes</h1>
      </header>
      <form>
        <h4>{errorMsg}</h4>
        <span className='marginLeft'>Username: </span><input type="text" value={username} onChange={e => setUsername(e.target.value)} name="username" placeholder='username' required></input>
        <span className='marginLeft'> Password: </span><input type="text" value={password} onChange={e => setPassword(e.target.value)} name="password" placeholder='password' required></input>
        <button type="button" onClick={handleSignIn} className='marginLeft'>Sign In</button>
      </form>
    </div>
  )
}



function ContentPage(props){
  const [noteLastsavedtime, setNoteLastsavedtime] = useState('-');
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [noteId, setNoteId] = useState('');

  const [displayFigure, setDisplayFigure] = useState(false);
  const [displaySave1Button, setDisplaySave1Button] = useState(false);
  const [displayCacelButton, setDisplayCancelButton] = useState(false);
  const [displaySave2Button, setDisplaySave2Button] = useState(false);
  const [displayDeleteButton, setDisplayDeleteButton] = useState(false);
  const [displayNewNoteButton, setDisplayNewNoteButton] = useState(false);
  const [displayCancelEditButton, setDisplayCancelEditButton] = useState(false);
  
  const [editing, setEditing] = useState(false);
  const [notesInfo, setNotesInfo] = useState(props.userInfo.notesInfo);

  function handleLogOut(){
    $.ajax({
      type: 'GET',
      xhrFields: { withCredentials: true },
      url: 'http://localhost:3001/logout',
    })
    .done(function () {
      if (editing){
        let confirmation = window.confirm("Are you sure to quit editing the note and log out?");
        if (confirmation){
          window.location.replace("http://localhost:3000");
        }
      } else {
        window.location.replace("http://localhost:3000");
      }
    })
  };

  function handleNoteItemsClick(e){
    $.ajax({
      type: 'GET',
      url: `http://localhost:3001/getnote?noteid=${e.target.id}`,
    })
    .done(function (data) {
      setDisplayFigure(true);
      setNoteLastsavedtime(data[0].lastsavedtime);
      setNoteTitle(data[0].title);
      setNoteContent(data[0].content);
      setNoteId(data[0]._id);
    })

    $('.noteItems').removeClass('highlighted');
    $(e.target).addClass('highlighted');

    setDisplaySave1Button(false);
    setDisplaySave2Button(false);
    setDisplayCancelButton(false);
    setDisplayCancelEditButton(false);
    setDisplayDeleteButton(true);
    setDisplayNewNoteButton(true);
    setEditing(true);

  }

  function handleSave1(){
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3001/addnote',
      xhrFields: { withCredentials: true },
      data: {
        title: noteTitle,
        content: noteContent
      }
    })
    .done(function (data) {

      setNotesInfo((prev) => [{
        _id: data._id,
        lastsavedtime: data.lastsavedtime,
        title: noteTitle 
      }, ...prev])
    
      setNoteLastsavedtime(data.lastsavedtime);
      setNoteId(data._id);
      setNoteTitle(noteTitle);

      setDisplaySave1Button(false);
      setDisplaySave2Button(false);
      setDisplayCancelButton(false);
      setDisplayCancelEditButton(false);
      setDisplayDeleteButton(true);
      setDisplayNewNoteButton(true);
      setEditing(false);

    })
  }

  function handleSave2(){
    $.ajax({
      type: 'PUT',
      url: `http://localhost:3001/savenote/${noteId}`,
      xhrFields: { withCredentials: true },
      data: {
        title: noteTitle,
        content: noteContent
      }
    }).done(function (data) {
      setNoteLastsavedtime(data)

      let objIndex = notesInfo.findIndex((obj => obj._id === noteId));
      
      let temp_state = [...notesInfo];
      let temp_element = { ...temp_state[objIndex] };
      temp_element.lastsavedtime = data;
      temp_element.title = noteTitle;
      temp_element.content = noteContent;
      console.log(temp_element)
      temp_state.unshift(temp_element);
      temp_state.splice(objIndex+1, 1)
      console.log(temp_state)
      setNotesInfo(temp_state);
      

      setDisplaySave1Button(false);
      setDisplaySave2Button(false);
      setDisplayCancelButton(false);
      setDisplayCancelEditButton(false);
      setDisplayDeleteButton(true);
      setDisplayNewNoteButton(true);
      setEditing(true);
    })
  }

  function handleDelete(){
    $.ajax({
      type: 'DELETE',
      url: `http://localhost:3001/deletenote/${noteId}`,
      xhrFields: { withCredentials: true },
    }).done(function(){
      var content = window.confirm("Are you sure to delete the note?"); // The "hello" means to show the following text
      if (content === true) {
        let new_state = (notesInfo.filter(note => note._id !== noteId));
        setNotesInfo(new_state);
        setDisplayFigure(false);
      }
    })
  }

  function handleSearch(e){
    let value = e.target.value
    if(e.key === "Enter"){
      $.ajax({
        type: 'GET',
        url: `http://localhost:3001/searchnotes?searchstr=${value}`,
        xhrFields: { withCredentials: true },
      }).done(function (data) {
        setNotesInfo(data);
      })
    }
  }

  function handleNewNote(){
    setNoteLastsavedtime('-');
    setNoteTitle('');
    setNoteContent('');
    setDisplayFigure(true);

    setDisplaySave1Button(true);
    setDisplaySave2Button(false);
    setDisplayCancelButton(true);
    setDisplayCancelEditButton(false);
    setDisplayDeleteButton(false);
    setDisplayNewNoteButton(false);
    setEditing(false);
  }

  function handleCancel(){
      setDisplayFigure(false);
  }
  
  function handleCancel1(){
    var content = window.confirm("Are you sure to quit editing the note?"); // The "hello" means to show the following text
    if (content === true) {
      setDisplaySave1Button(false);
      setDisplaySave2Button(false);
      setDisplayCancelButton(false);
      setDisplayCancelEditButton(false);
      setDisplayDeleteButton(true);
      setDisplayNewNoteButton(true);
      setEditing(true);
    }
  }

  function handleOnEdit(){
    if (editing){
      setDisplaySave1Button(false);
      setDisplaySave2Button(true);
      setDisplayCancelEditButton(true);
      setDisplayCancelButton(false);
      setDisplayDeleteButton(false);
      setDisplayNewNoteButton(false);
      setEditing(true);
    }
  }

  return(
    <>
      <header id='header'>
        <h1>iNotes</h1>
        <div className='headerItems'>
          <img src={props.userInfo.icon} alt={props.userInfo.icon}/>
          <p>{props.userInfo.name}</p>
          <button type="submit" onClick={handleLogOut}>log out</button>
        </div>
      </header>

      <div className='container'>
        <div className='left'>
          <input type="text" placeholder='search' onKeyUp={handleSearch} size="70"/>
          <h5>Notes {`(${notesInfo.length})`}</h5>
          <ul>
            { notesInfo.map(item => {
              return <li className='noteItems' key={item._id} id={item._id} onClick={handleNoteItemsClick}>{item.title}</li>
            })}
          </ul>

        </div>
        <div className='right'>
          {displayFigure && <div>
            <p>Last Saved: {noteLastsavedtime}</p>
            <input type="text" placeholder='Note Title' name="" value={noteTitle} onChange={e => setNoteTitle(e.target.value)} onFocus={handleOnEdit}/>
            <br/><br/>
            <textarea placeholder='Note Content' cols="40" rows="5" value={noteContent} onChange={e => setNoteContent(e.target.value)} onFocus={handleOnEdit}></textarea>
            <br/>
          </div>}
          {displayFigure && <div>
            {displaySave1Button && <button type="button" onClick={handleSave1}>Save New Note</button>}
            {displayCacelButton && <button type="button" onClick={handleCancel}>Cancel New Note</button>}
            {displayCancelEditButton && <button type="button" onClick={handleCancel1}>Cancel Edit</button>}
            {displaySave2Button && <button type="button" onClick={handleSave2}>Save Existing Note</button>}
            {displayDeleteButton && <button type="button" onClick={handleDelete}>Delete</button>}
            {displayNewNoteButton && <button type="button" onClick={handleNewNote}>New Note</button>}
          </div>}
          {!displayFigure && <button type="button" onClick={handleNewNote} id="new-note-button">New Note</button>}
        </div>
      </div>
    </>
  )
}
export default App;
