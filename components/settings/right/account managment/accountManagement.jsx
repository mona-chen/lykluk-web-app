import InputElement from '../../../InputElement/InputElement'
import PasswordInputField from './passwordInputField/passwordInputField'
import { passwordInputType } from './passwordInputField/passwordInputFieldWithoutLabel'
const AccountManagement = () => {
  return (
    <div>
      <p>Email</p>
      <InputElement
        type="email"
        placeholder="Change your email address"
      ></InputElement>
      <p>Password</p>
      <input type="password" placeholder="***********" />
    </div>
  )
}

export default AccountManagement
