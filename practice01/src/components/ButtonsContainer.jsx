import React from 'react'
import styles from './ButtonsContainer.module.css'
const ButtonsContainer=({onButtonclick}) =>{

    const buttonNames = ["1","2","3","4","5","6",'7','8','9','0','+','-','*','/','C','='];
  return (
    <div className={styles.buttonscontainer}> {buttonNames.map((buttonName)=>(
        <button onClick={()=>onButtonclick(buttonName)}>{buttonName}</button>
  ))}
      
    </div>
  
  )
}


export default ButtonsContainer;
