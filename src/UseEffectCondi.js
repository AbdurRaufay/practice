import React, { useEffect, useState } from "react";

function useEffectCondi(){
    const [count,setCount]=useState(0)
    const [name,setName]=useState()
    useEffect(()=>{
        console.log('useEffect clicked')
        document.title=`you clicked ${count}`
    },[])

return (
    <div>
     <input type='text' value={name} onChange={e=>setName(e.target.value)}/>
     <button onClick={()=>setCount(count+1)}>Count</button>
     <h1>{count}</h1>
    </div>
)
}
export default useEffectCondi;