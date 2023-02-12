/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react'
import { passwordInputType } from './passwordInputFieldWithoutLabel'
import Image from 'next/image'
import styles from './passwordStyle.module.css'
const PasswordInputField = ({ type, changeFunction, value }) => {
  const [visible, setVisible] = useState(false)

  const changeVisibility = () => {
    setVisible(!visible)
  }

  return (
    <div>
      <label>
        {type === passwordInputType.password ? 'Password' : 'Confirm Password'}
      </label>
      <div className={styles.container}>
        {visible ? (
          <Image
            src="/hidden_eye.svg"
            alt="hidden"
            width={21}
            height={18}
            className={styles.input_icon}
            onClick={changeVisibility}
          ></Image>
        ) : (
          <Image
            src="/eye.svg"
            alt="visible"
            width={21}
            height={18}
            className={styles.input_icon}
            onClick={changeVisibility}
          ></Image>
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
              ? 'Password'
              : 'Confirm Password'
          }
          className={styles.input_field}
        />
      </div>
    </div>
  )
}

export default PasswordInputField
