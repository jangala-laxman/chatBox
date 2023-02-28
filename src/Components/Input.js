import React from "react";

const Input = ({message, setMessage, sendMessage})=>{
    return(
        <div>
            <form>
                <input type="text" 
                    placeholder="type a message"                    
                    onChange={(e) => setMessage(e.target.value)}
                    value={message} 
                    onKeyDown={event => event.key === 'Enter' ? sendMessage(event) : null} 
                    style={{border:30 }}  
                    />
                <button className="btn" 
                    onClick={(e)=>sendMessage(e)}
                    style={{border:30 }}    
                        >Send</button>
            </form>
        </div>
    )
}

export default Input