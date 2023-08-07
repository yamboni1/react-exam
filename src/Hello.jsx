import { useState } from "react"
import "./styles.css"

export default function Hello(){
  const [newName, setNewName] = useState("")
  const [names, setNames] = useState(false)
  function handleSubmit(e){
  console.warn(e.target.value)
  setNewName(e.target.value)
  setNames(false)
 }

  return(
    <>
        <div className="form=row">
          <label htmlFor="name">Enter your name: 
          {
            names ? <h2>{newName}</h2> : null
          }
          </label>
        </div>
        <input type= "text" onChange={handleSubmit} id="name"/>
        <button className="btn" onClick={()=>setNames(true)}>Submit</button>
    </>
   
  );

  
}