/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-unresolved */
import 'react-phone-number-input/style.css'
import Image from 'next/image'
import PhoneInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'
import PasswordInput from '../../../passwordInput/passwordInput'
import { useState } from 'react'
import styles from './style.module.css'
import { passwordInputType } from '../../../../utils/passwordInputField'
import { ButtonPrimary } from '../../../buttons/ButtonReuse'
import { Hr } from '../../horizontalRule/hr'
import EditProfile from './editProfile/editProfile'
import ChangePassword from './changePassword/changePassword'

const AccountManagement = () => {
  // const [formFields, setFormFields] = useState(defaultFormFields)
  // const { email, password } = formFields

  // const changeHandler = (e) => {
  //   const { name, value } = e.target
  //   setFormFields({ ...formFields, [name]: value })
  // }
  const [mainPage, setMainPage] = useState(true)
  const [profilePage, setProfilePage] = useState(false)
  const [changePasswordPage, setChangePasswordPage] = useState(false)
  const goto_edit_profile = () => {
    setMainPage(false)
    setChangePasswordPage(false)
    setProfilePage(true)
  }
  const goto_main_page = () => {
    setChangePasswordPage(false)
    setProfilePage(false)
    setMainPage(true)
  }
  const goto_change_password = () => {
    setProfilePage(false)
    setMainPage(false)
    setChangePasswordPage(true)
  }

  return (
    <>
      {mainPage ? (
        <>
          <div>
            <h3 className={styles.section_heading}>Account information</h3>
            <div className={styles.link_div} onClick={goto_edit_profile}>
              <div className={styles.left}>
                <h4>Profile</h4>
                <p>Edit Profile</p>
              </div>
              <div className={styles.right}>
                <Image src="/goto.svg" width={15} height={15}></Image>
              </div>
            </div>
            <div className={styles.link_div} onClick={goto_change_password}>
              <div className={styles.left}>
                <h4>Change Password</h4>
                <p>change your password</p>
              </div>
              <div className={styles.right}>
                <Image src="/goto.svg" width={15} height={15}></Image>
              </div>
            </div>
            <h3 className={styles.section_heading}>Account Avalability</h3>

            <div className={styles.link_div}>
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
        </>
      ) : null}
      {profilePage ? (
        <EditProfile goBackToMainPage={goto_main_page}></EditProfile>
      ) : null}
      {changePasswordPage ? (
        <ChangePassword goBackToMainPage={goto_main_page}></ChangePassword>
      ) : null}
    </>
  )
}

export default AccountManagement
{
  /* <div className={styles.input_field_div}>
        <p className={styles.label}>Phone Number</p>
        <PhoneInput
          flags={flags}
          onChange={setPhoneField}
          defaultCountry="NG"
          international={true}
          value={phoneField}
        />
      </div> */
}
{
  /* <div className={styles.input_field_div}>
        <p className={styles.label}>Change Password</p>
        <PasswordInput
          type={passwordInputType.password}
          placeholder={'********'}
          changeFunction={changeHandler}
          value={password}
        ></PasswordInput>
      </div>
      <div className={styles.button_div}>
        <ButtonPrimary width={'200px'} action={show}>
          {' '}
          Save Changes
        </ButtonPrimary>
      </div>
      <Hr color={'rgba(238, 238, 238, 1)'} marginBottom={'3rem'}></Hr> */
}
