import React from "react"
import "./bttn.css"
const Bttn = ({ texto , href } )=>{
    
    return(
    <div>
        <button className="bttn"><a href={href} target="_blank">{texto}</a></button>
    </div>
    )
}
export default Bttn;
