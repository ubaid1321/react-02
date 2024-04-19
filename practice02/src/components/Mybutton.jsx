import React, { useState } from 'react'

function Mybutton() {
    const [Count,setCount]=useState(0);
    const handleClick=()=>{
        setCount(Count+1);
    }

  return (
    <div>
      <button  onClick={handleClick}>count</button>
      <button onClick={handleClick}>decrease count</button>
    </div>
  )
}

export default Mybutton
