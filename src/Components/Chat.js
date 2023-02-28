import React, { useEffect, useState} from "react";
import  io from 'socket.io-client'
import querystring from 'query-string'
import InfoBar from './InfoBar'
import Input from './Input'
import Messages from "./Messages";
import TextContainer from "./TextContainer";
let socket 

const Chat = ()=>{
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [users, setUsers] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])


    useEffect(()=>{
        const { name, room } = querystring.parse(window.location.search);

    socket = io('http://localhost:3001');

    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
    },['http://localhost:3001', window.location.search])

    const sendMessage = (e)=>{
        e.preventDefault()
        if(message){
            socket.emit('sendMessage',message,()=>setMessage(''))
        }
    }

    console.log([...messages, message] )

    useEffect(()=>{
        socket.on('message',(message)=>{
            setMessages([...messages, message])
        })
        socket.on('roomData',({users})=>{
            setUsers(users)
        })
    },[])


    return(
        <div>
            <h2>Chat</h2>
            <div className="container">

            <InfoBar room={room}/>
            <Messages messages={messages} name={name} /> 
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>

            </div>
            <TextContainer  users={users}/>
        </div>
    )
}

export default Chat