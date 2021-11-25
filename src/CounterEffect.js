import React, { useEffect, useState } from "react";

function CounterEffect(){
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log('Use Effect')
        document.title=`you Clicked ${count} times`

    })
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Count</button>
            <p>{count}</p>
        </div>
    )
}
export default CounterEffect;