import React from 'react'

const Modal = ({children}) => {
  return (
    <div>
      <div class="card" style={{width: "70%"}}>
 
  <div class="card-body">
   {children}
  </div>
</div>
    </div>
  )
}

export default Modal
