import { useState } from 'react'
import ButtonsContainer from './components/ButtonsContainer'
import Display from './components/Display'

function App() {
  const [calVal,setCalVal]=useState('');
  const onButtonclick=(buttonText)=>{
    if( buttonText=== "C"){
      setCalVal("")
    }else if(buttonText==="="){
      const result=eval(calVal);
      setCalVal(result)
    }else{
    const newDisplayValue=calVal + buttonText;
    setCalVal(newDisplayValue);
  }
};
  return (
    <>
    <Display displayValue={calVal}/>
      <ButtonsContainer onButtonclick={onButtonclick}></ButtonsContainer>
      
    </>
  )
}

export default App
