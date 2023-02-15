/* eslint-disable import/no-unresolved */
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'
import PasswordInput from '../../../passwordInput/passwordInput'
import { useState } from 'react'
import styles from './style.module.css'
import { passwordInputType } from '../../../../utils/passwordInputField'
import { ButtonPrimary } from '../../../buttons/ButtonReuse'
import { Hr } from '../../horizontalRule/hr'

const defaultFormFields = {
  email: '',
  password: '',
}
const AccountManagement = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const changeHandler = (e) => {
    const { name, value } = e.target
    setFormFields({ ...formFields, [name]: value })
  }
  // phone number input
  const [phoneField, setPhoneField] = useState('')

  return (
    <div>
      <div className={styles.input_field_div}>
        <p className={styles.label}>Email</p>
        <input
          name="email"
          onChange={changeHandler}
          type="text"
          placeholder="change your email"
          className={styles.input_elements}
        ></input>
      </div>
      <div className={styles.input_field_div}>
        <p className={styles.label}>Phone Number</p>
        <PhoneInput
          flags={flags}
          onChange={setPhoneField}
          defaultCountry="NG"
          international={true}
          value={phoneField}
        />
      </div>
      <div className={styles.input_field_div}>
        <p className={styles.label}>Change Password</p>
        <PasswordInput
          type={passwordInputType.password}
          placeholder={'********'}
          changeFunction={changeHandler}
          value={password}
        ></PasswordInput>
      </div>
      <div className={styles.button_div}>
        <ButtonPrimary width={'200px'}> Save Changes</ButtonPrimary>
      </div>
      <Hr color={'rgba(238, 238, 238, 1)'} marginBottom={'3rem'}></Hr>

      
      <div className={styles.bottom_section}>
        <div className={styles.left}>
          <h4>Account Deactivation</h4>
          <p>Your account and posts will be deleted permanently.</p>
        </div>
        <div className={styles.right}>
          <ButtonPrimary fill={'rgba(204, 204, 204, 1)'} width={'150px'}>
            Delete
          </ButtonPrimary>
        </div>
      </div>
    </div>
  )
}

export default AccountManagement
