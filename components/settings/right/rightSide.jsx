import styles from './style.module.css'
import { useSelector } from 'react-redux'
import { setting_options } from '../../../utils/settings'
import AccountManagement from './account managment/accountManagement'
import Privacy from './privacy/privacy'
import Notification from './notification/notifiction'
import QRCode from './QR Code/QRCode'
import { useDispatch } from 'react-redux'
import { set_is_password_reset , set_is_profile_edited} from '../../../redux/settings'
const RightSide = () => {
  const dispatch = useDispatch()
  dispatch(set_is_password_reset(false))
  dispatch(set_is_profile_edited(false))
  const { selected_setting } = useSelector((state) => state.settings)
  return (
    <div className={styles.inner_div}>
      {selected_setting === setting_options.AccountManagment ? (
        <AccountManagement></AccountManagement>
      ) : null}
      {selected_setting === setting_options.PrivacySettings ? (
        <Privacy></Privacy>
      ) : null}
      {selected_setting === setting_options.Notifications ? (
        <Notification></Notification>
      ) : null}
      {selected_setting === setting_options.Accesibility ? (
        <p>Accessibility</p>
      ) : null}
      {selected_setting === setting_options.Wallet ? <p>Wallet</p> : null}
      {selected_setting === setting_options.BlockedAccounts ? (
        <p>BlockedAccounts</p>
      ) : null}
      {selected_setting === setting_options.QRCode ? <QRCode></QRCode> : null}
      {selected_setting === setting_options.HelpCenter ? (
        <p>HelpCenter</p>
      ) : null}
    </div>
  )
}

export default RightSide
