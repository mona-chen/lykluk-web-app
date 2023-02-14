/* eslint-disable import/no-unresolved */
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'

import { useState } from 'react'
import styles from './style.module.css'

const defaultFormFields = {
  email: '',
  phoneNumber: '',
  password: '',
}
const AccountManagement = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, phoneNumber, password } = formFields

  const changeHandler = (e) => {
    const { name, value } = e.target
    setFormFields({ ...formFields, [name]: value })
  }
  return (
    <div>
      <p>Email</p>
      <input
        name="email"
        onChange={changeHandler}
        type="text"
        placeholder="change your email"
        className={styles.input_elements}
      ></input>

      <p>Phone Number</p>
      <PhoneInput
        flags={flags}
        onChange={changeHandler}
        defaultCountry="NG"
        international={true}
        value={phoneNumber}
      />
      <p>Password</p>
      <input
        name="password"
        type="password"
        onChange={changeHandler}
        placeholder="***********"
        className={styles.input_elements}
      />
    </div>
  )
}

export default AccountManagement
