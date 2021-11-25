import React, { useState } from "react";

function HooksArray(){
    const [name,printName]=useState(['Abdur Rauf','Sadeeq Ahmad','Shahid Ullah'])

     function setState(){
        printName(['asfdsa','asdga','aga'])
    }
    return(
        <div>
           <ol>
               {name.map(name=>{
                   return <li>{name}</li>
               })}
           </ol>
           <button onClick={setState}>Click</button>
        </div>
    )
}
export default HooksArray;