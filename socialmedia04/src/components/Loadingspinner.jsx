import React from 'react'

const  Loadingspinner=()=> {
  return (
    <h1><div className="d-flex justify-content-center spinner " role="status" >
    <div className="spinner-border" role="status" style={{width:"5rem", height:"5rem"}}>
      <span className="visually-hidden">Loading...</span>
    </div>
  </div></h1>
  )
}

export default Loadingspinner
