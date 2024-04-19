import styles from "./App.module.css";
import './App.module.css'
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";
function App() {
  let [calVal,setCalVal]=useState("");
  const OnButtonClick=(buttonText)=>{
    if(buttonText==='C'){
    setCalVal("");
    }else if(buttonText==='='){
     const result=eval(calVal);
     setCalVal(result);
    }else{
      const newDisplayValue =calVal + buttonText; 
      setCalVal(newDisplayValue);
    }
  }

 

  return (
  <div className={styles.calculator}>
    <Display displayValue={calVal}></Display>
    <ButtonsContainer onButtonClick={OnButtonClick}></ButtonsContainer>
    

  </div>
  );
}

export default App
