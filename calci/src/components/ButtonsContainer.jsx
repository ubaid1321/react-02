import React from 'react'
import styles from "./ButtonsContainer.module.css"

const ButtonsContainer = ({onButtonClick}) => {
    const buttonNames=['C','1','2','3','4','5','6','7','8','9','0','+','-','/','=','.','*']
  return (
    <div>
       <div className={styles.buttonscontainer}>
    {buttonNames.map((buttonname)=> <button onClick={()=>onButtonClick(buttonname) } className={styles.button}>{buttonname}</button>)}
  </div>
    </div>
  )
}

export default ButtonsContainer
