import styles from './style.module.css'
import { useSelector } from 'react-redux'
import { setting_options } from '../../../utils/settings'
import AccountManagement from './account managment/accountManagement'
import Privacy from './privacy/privacy'
import Notification from './notification/notifiction'
import QRCode from './QR Code/QRCode'
const RightSide = () => {
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
