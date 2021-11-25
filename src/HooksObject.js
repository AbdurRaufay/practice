import React, { useState } from "react";

function HooksObject(){
 
     const [name,num,setName]=useState({firstName:'',lastName:'',num:2})
     return(
         <div>
             <form>
                 <input type='text' value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}/>
                 <input type='text' value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}/>
             </form>
             <h1>{name.firstName}</h1>
             <h1>{name.lastName}</h1>
             <h1>{num}</h1>
         </div>
     )
}
export default HooksObject;