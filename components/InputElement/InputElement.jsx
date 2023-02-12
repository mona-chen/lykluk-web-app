import React from 'react'
import styles from './style.module.css'

const InputElement = ({ type, placeholder }) => {
  return (
    <input type={type} className={styles.input} placeholder={placeholder} />
  )
}

export default InputElement
