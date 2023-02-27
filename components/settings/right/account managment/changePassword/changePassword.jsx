import styles from './style.module.css'
import { useState } from 'react'
import GoBackIcon from '../goBackIcon/goBackIcon'
import { ButtonPrimary } from '../../../../buttons/ButtonReuse'
import { requestOtp, resetPassword } from '../../../../../redux/settings'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Router } from 'next/router'
const defaultFormFields = {
  emailInput: '',
  otp: '',
  newPassword: '',
  confirmNewPassword: '',
}

const ChangePassword = ({ goBackToMainPage }) => {
  const router = useRouter()
  useEffect(() => {
    if (isPasswordReset) {
      router.push('/')
    }
  })
  const dispatch = useDispatch()
  const { isOtpSent, isPasswordReset } = useSelector((state) => state.settings)
  const [formFields, setFormFeilds] = useState(defaultFormFields)
  const { emailInput, otp, newPassword, confirmNewPassword } = formFields

  const [newPasswordError, setNewPasswordError] = useState(false)
  const [confirmNewPasswordError, setConfirmNewPasswordError] = useState(false)
  const [otpError, setOtpError] = useState(false)
  const [emailInputError, setEmailInputError] = useState(false)

  const changeFunction = (e) => {
    const { name, value } = e.target
    setFormFeilds({ ...formFields, [name]: value })
  }
  const requestOtpForEmail = () => {
    dispatch(requestOtp({ email: emailInput }))
  }
  const requestResetPassword = () => {
    dispatch(
      resetPassword({ to: emailInput, password: newPassword, code: otp })
    )
  }
  const validateEmail = () => {
    if (
      !new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ).test(emailInput)
    ) {
      setEmailInputError(true)

      return
    } else {
      setEmailInputError(false)
    }

    requestOtpForEmail()
  }
  const validatePassword = () => {
    if (!otp.trim() || otp.length !== 6) {
      setOtpError(true)
      return
    } else {
      setOtpError(false)
    }

    if (!newPassword.trim()) {
      setNewPasswordError(true)
      return
    } else {
      setNewPasswordError(false)
    }
    if (newPassword !== confirmNewPassword) {
      setConfirmNewPasswordError(true)
      return
    } else {
      setConfirmNewPasswordError(false)
    }
    requestResetPassword()
  }

  return (
    <div className={styles.main_div}>
      <GoBackIcon action={goBackToMainPage}></GoBackIcon>
      <h3 className={styles.heading}>Change Password</h3>

      {isOtpSent ? (
        <>
          {otpError ? (
            <p className={styles.error_message}>otp must be a 6 digit input</p>
          ) : null}
          <input
            type="text"
            value={otp}
            name="otp"
            onChange={changeFunction}
            placeholder="input the six digit OTP sent to your email"
            className={styles.second_screen_input_feild}
          />
          {newPasswordError ? (
            <p className={styles.error_message}> Please input a new password</p>
          ) : null}
          <input
            type="text"
            value={newPassword}
            name="newPassword"
            onChange={changeFunction}
            placeholder="input your new password"
            className={styles.second_screen_input_feild}
          />
          {confirmNewPasswordError ? (
            <p className={styles.error_message}>
              confirm password is not equal to new password
            </p>
          ) : null}
          <input
            type="text"
            value={confirmNewPassword}
            name="confirmNewPassword"
            onChange={changeFunction}
            placeholder="confirm your new password"
            className={styles.second_screen_input_feild}
          />
          <div className={styles.button_div}>
            <ButtonPrimary width={'250px'} action={validatePassword}>
              {' '}
              Reset Password
            </ButtonPrimary>
          </div>
        </>
      ) : (
        <>
          <div className={styles.input_field_div}>
            <p className={styles.label}>Email</p>
            <input
              type="email"
              value={emailInput}
              name="emailInput"
              onChange={changeFunction}
              placeholder="input your email"
            />
            {emailInputError ? (
              <p className={styles.error_message}> {errorMessage}</p>
            ) : null}
          </div>
          <div className={styles.button_div}>
            <ButtonPrimary width={'250px'} action={validateEmail}>
              {' '}
              Continue
            </ButtonPrimary>
          </div>
        </>
      )}
    </div>
  )
}

export default ChangePassword

{
  /* <input
    type="text"
    value={otp}
    name="otp"
    onChange={changeFunction}
    placeholder="input the six digit OTP sent to your email"
    className={styles.second_screen_input_feild}
  />
  <input
    type="text"
    value={newPassword}
    name="newPassword"
    onChange={changeFunction}
    placeholder="input your new password"
    className={styles.second_screen_input_feild}
  />
  <input
    type="text"
    value={confirmNewPassword}
    name="confirmNewPassword"
    onChange={changeFunction}
    placeholder="confirm your new password"
    className={styles.second_screen_input_feild}
  />
  <div className={styles.button_div}>
    <ButtonPrimary width={'250px'}> Reset Password</ButtonPrimary>
  </div>*/
}
