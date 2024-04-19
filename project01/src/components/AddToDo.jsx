import { useState,useRef } from "react";

function AddTodo({ onNewItem }) {
  const todoNameElement=useRef();
  const dueDateElement=useRef();
 
  const handleAddButtonClicked = (event) => {
   event.preventDefault();
   const todoName = todoNameElement.current.value;
   const dueDate = dueDateElement.current.value;
   todoNameElement.current.value="";
   dueDateElement.current.value="";
   onNewItem(todoName,dueDate);
  
  };

  return (
    <div className="container text-center">
      <form onSubmit={handleAddButtonClicked} className="row kg-row">
        
        <div className="col-6">
          <input
          ref={todoNameElement}
            type="text"
            placeholder="Enter Todo Here"
          
          />
        </div>
        <div className="col-4">
          <input ref={dueDateElement} type="date"   />
        </div>
        <div className="col-2">
          <button type="submit"className="btn btn-success kg-button">Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;