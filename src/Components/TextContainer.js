import React from "react"

const TextContainer= ({users})=>{
    return(
        <div className="textContainer">
    
            {users ? (
                <div>
                    <h1>People curently chatting</h1>
                    <div className="activeUsers">
                        {
                            users.map(({name, index})=> 
                            <div key={index}>
                                {name}
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828665.png" alt="online"/>
                            </div>
                            
                            )
                        }
                    </div>
                </div>
            ):(
                 null
            )
                
            }
        </div>
    )
}

export default TextContainer