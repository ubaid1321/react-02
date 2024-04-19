
import React, { useState } from 'react'

function App(){
  return(
    <div>
      <MyButton/>
      <MyButton/>
    </div>
  )
}
function MyButton(){
  const [count,setCount]=useState(0)

  function handleClick(){
    setCount(count+1)
  }
  return(
    <button onClick={handleClick}>clicked {count} times</button>
  )
}

export default App;

