/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useDispatch, useSelector } from 'react-redux'
import { setting_options } from '../../../utils/settings'
import { set_current_settings } from '../../../redux/settings'
import Image from 'next/image'
import styles from './style.module.css'
const LeftSide = () => {
  const dispatch = useDispatch()
  const { selected_setting } = useSelector((state) => state.settings)
  return (
    <div className={styles.inner_div}>
      <div className={styles.back_icon}>
        <Image src="/backIcon.svg" width={15} height={15}></Image>
      </div>

      <div
        className={styles.option}
        onClick={() =>
          dispatch(set_current_settings(setting_options.AccountManagment))
        }
      >
        <Image src="/account_management.svg" width={13} height={13}></Image>
        <p
          className={
            selected_setting === setting_options.AccountManagment
              ? styles.active_option_link
              : styles.option_links
          }
        >
          Account Managment
        </p>
      </div>
      <div
        className={styles.option}
        onClick={() =>
          dispatch(set_current_settings(setting_options.PrivacySettings))
        }
      >
        <Image src="/privacy.svg" width={13} height={13}></Image>
        <p
          className={
            selected_setting === setting_options.PrivacySettings
              ? styles.active_option_link
              : styles.option_links
          }
        >
          Privacy Settings
        </p>
      </div>
      <div
        className={styles.option}
        onClick={() =>
          dispatch(set_current_settings(setting_options.Notifications))
        }
      >
        <Image src="/notification.svg" width={13} height={13}></Image>
        <p
          className={
            selected_setting === setting_options.Notifications
              ? styles.active_option_link
              : styles.option_links
          }
        >
          Push Notifications
        </p>
      </div>
      <div
        className={styles.option}
        onClick={() =>
          dispatch(set_current_settings(setting_options.Accesibility))
        }
      >
        <Image src="/accessibility.svg" width={13} height={13}></Image>
        <p
          className={
            selected_setting === setting_options.Accesibility
              ? styles.active_option_link
              : styles.option_links
          }
        >
          Accesibility
        </p>
      </div>
      <div
        className={styles.option}
        onClick={() => dispatch(set_current_settings(setting_options.Wallet))}
      >
        <Image src="/wallet.svg" width={13} height={13}></Image>
        <p
          className={
            selected_setting === setting_options.Wallet
              ? styles.active_option_link
              : styles.option_links
          }
        >
          Wallet
        </p>
      </div>
      <div
        className={styles.option}
        onClick={() =>
          dispatch(set_current_settings(setting_options.BlockedAccounts))
        }
      >
        <Image src="/blocked_accounts.svg" width={13} height={13}></Image>
        <p
          className={
            selected_setting === setting_options.BlockedAccounts
              ? styles.active_option_link
              : styles.option_links
          }
        >
          Blocked Accounts
        </p>
      </div>
      <div
        className={styles.option}
        onClick={() => dispatch(set_current_settings(setting_options.QRCode))}
      >
        <Image src="/qr_code.svg" width={13} height={13}></Image>
        <p
          className={
            selected_setting === setting_options.QRCode
              ? styles.active_option_link
              : styles.option_links
          }
        >
          QR Code
        </p>
      </div>
      <div
        className={styles.option}
        onClick={() =>
          dispatch(set_current_settings(setting_options.HelpCenter))
        }
      >
        <Image src="/help_center.svg" width={13} height={13}></Image>
        <p
          className={
            selected_setting === setting_options.HelpCenter
              ? styles.active_option_link
              : styles.option_links
          }
        >
          Help Center
        </p>
      </div>
    </div>
  )
}

export default LeftSide
