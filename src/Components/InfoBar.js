import React from "react"

const InforBar = ({room})=>{
    return(
        <div className="InfoBar">
            <div className="LeftContainer">
                <span><h2>Room Name :{room}</h2> </span><span><img className="onlineIcon" 
                    src="https://cdn-icons-png.flaticon.com/128/3699/3699516.png" 
                    alt="online icon"
                    style={{height:20, width:20}}
                    />
                </span>
            </div>
            <div className="RightContainer">
                <a href="/">
                    <img src="https://cdn-icons-png.flaticon.com/128/1828/1828665.png" 
                        alt='close'
                            style={{height:20, width:20}}
                    /></a>
            </div>
        </div>)
}

export default InforBar