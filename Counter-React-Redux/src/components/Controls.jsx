import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
   
  const dispatch= useDispatch();
   
  const inputElement=useRef();

  const handleIncrement=()=>{
    dispatch({type:"INCREMENT"})
 }
 const handleDecrement=()=>{
    dispatch({type:"DECREMENT"})
 }
 const handleAdd=()=>{
  
dispatch({type:"ADD",payload:{
  num:inputElement.current.value,
}
})
inputElement.current.value=""
 }
 const handleSubtract=()=>{
  
dispatch({type:"SUBTRACT",payload:{
  num:inputElement.current.value,
}
})
inputElement.current.value=""
 }


  return (
    <>
    <div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button onClick={handleIncrement} type="button" className="btn btn-info">
          +1
        </button>

        <button onClick={handleDecrement} type="button" className="btn btn-light">
          -1
        </button>
      </div>
    </div>
    <div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input  type="text" placeholder="Enter Number" className="number-input" ref={inputElement}/>
         
        

        <button  type="button" className="btn btn-info" onClick={handleAdd}>
        Add
        </button>
        <button  type="button" className="btn btn-danger" onClick={handleSubtract}>
        Subtract
        </button>
      </div>
    </div>
    </>
  );
};

export default Controls;
