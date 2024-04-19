import React from 'react'
import { useSelector } from 'react-redux'

const Displaycounter = () => {
   const {counterVal}= useSelector((store)=>store.counter)
  return (
    <div>
   <p class="lead mb-4">Current Counter Value:{counterVal}</p>
    </div>
  )
}

export default Displaycounter
