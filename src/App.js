import React from 'react';
import './App.css';
// import {io} from 'socket.io-client'
import Join from './Components/Join'
import Chat from './Components/Chat'
import { Routes, Route, Link} from 'react-router-dom'
import AddUser from './Components/AddUser'

function App() {


  return (
    <div className="App">
    {/* <Link to='/join'>Join Room</Link><br/>
      <Link to='/addUser' >Add User</Link> */}
      <Routes>
      
        <Route exact path="/" element={<Join/>}  />
        <Route path="/chat" element={<Chat/>}  />
        <Route path='/AddUser' element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
