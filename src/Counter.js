import React, { useCallback, useState } from "react";

function Counter(){
   let initialCount=0
    const [count,setCount]=useState(initialCount)

   const incrementFive=()=>{
            setCount(prevState=>prevState+5)
    }    
   return(
       <div>
           <h1>{count}</h1>
           <button onClick={()=>setCount(count-1)}>Minus</button>
           <button onClick={()=>setCount(count+1)}>Plus</button>
           <button onClick={()=>setCount(initialCount)}>Reset</button>
           <button onClick={incrementFive}>incrementFive</button>
       </div>
   )
      }
export default Counter;