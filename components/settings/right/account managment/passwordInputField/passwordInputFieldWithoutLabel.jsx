/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react'
import styles from './passwordStyle.module.css'
export const passwordInputType = {
  password: 'password',
  confirmPassword: 'confirmPassword',
}

const PasswordInputFieldWithoutLabel = ({ type, changeFunction, value }) => {
  const [visible, setVisible] = useState(false)

  const changeVisibility = () => {
    setVisible(!visible)
  }

  return (
    <div>
      <div className={styles.container}>
        {visible ? (
          <img
            src="/hidden_eye.svg"
            alt="hidden"
            className={styles.input_icon}
            onClick={changeVisibility}
          ></img>
        ) : (
          <img
            src="/eye.svg"
            alt="visible"
            className={styles.input_icon}
            onClick={changeVisibility}
          ></img>
        )}
        <input
          type={visible ? 'text' : 'password'}
          name={
            type === passwordInputType.password
              ? passwordInputType.password
              : passwordInputType.confirmPassword
          }
          value={value}
          onChange={changeFunction}
          placeholder={
            type === passwordInputType.password
              ? 'password'
              : 'confirm password'
          }
          className={styles.input_field}
        />
      </div>
    </div>
  )
}

export default PasswordInputFieldWithoutLabel
