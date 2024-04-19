import React from 'react'
import styles from './Display.module.css'

const Display=({displayValue}) =>{
  return (
    <>
    <input className={styles.display} value={displayValue} type="text"  readOnly/>
    </>
  )
}

export default Display;
