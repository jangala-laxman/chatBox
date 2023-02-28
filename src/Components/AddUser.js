import React, {useState} from "react"


const AddUser=()=>{
    const [name, setName] = useState('')
    return(
        <div>
            <input type="text" placeholder="name" onChange={(e)=>setName(e.target.value)} value={name} />
            <button >add</button>
        </div>)
}

export default AddUser