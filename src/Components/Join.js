import React, {useState} from "react";
import {Link} from 'react-router-dom'
const Join = ()=>{

    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    return(
        <div className="Join">
            <div className="JoinInner">
                <h1 className="heading">Join</h1>               
                    <input type="text" className="joinInput" placeholder="Name" onChange={(e)=>{setName(e.target.value)}}/><br/>
                    <input type="text" className="joinInput mt-20" placeholder="Room" onChange={(e)=>{setRoom(e.target.value)}} /><br/>
                    <Link onClick={e=>(!name || !room) ? e.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
                        <button className="button mt-20" type='submit' onClick={e=>(!name || !room) ? e.preventDefault():null}>Join</button>
                    </Link>
               
            </div>
        </div>
    )
}

export default Join