import React from 'react'
import { useSelector } from 'react-redux'

const Displaycounter = () => {
   const counter= useSelector((store)=>store.counter)
  return (
    <div>
   <p class="lead mb-4">Current Counter Value:{counter}</p>
    </div>
  )
}

export default Displaycounter
