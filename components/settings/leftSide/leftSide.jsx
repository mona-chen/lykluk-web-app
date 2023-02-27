/* eslint-disable todo-plz/ticket-ref */
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

  const settings_links = [
    {
      name: 'Account Managment',
      onclick_fuction: setting_options.AccountManagment,
      icon: '/account_management.svg',
    },
    {
      name: 'Privacy Settings',
      onclick_fuction: setting_options.PrivacySettings,
      icon: '/privacy.svg',
    },
    {
      name: 'Push Notifications',
      onclick_fuction: setting_options.Notifications,
      icon: '/notification.svg',
    },
    {
      name: 'Accesibility',
      onclick_fuction: setting_options.Accesibility,
      icon: '/accessibility.svg',
    },
    {
      name: 'Wallet',
      onclick_fuction: setting_options.Wallet,
      icon: '/wallet.svg',
    },
    {
      name: 'Blocked Accounts',
      onclick_fuction: setting_options.BlockedAccounts,
      icon: '/blocked_accounts.svg',
    },
    {
      name: 'QR Code',
      onclick_fuction: setting_options.QRCode,
      icon: '/qr_code.svg',
    },
    {
      name: 'Help Center',
      onclick_fuction: setting_options.HelpCenter,
      icon: '/help_center.svg',
    },
  ]
  return (
    <div className={styles.inner_div}>
      <div className={styles.back_icon}>
        <Image src="/backIcon.svg" width={15} height={15}></Image>
      </div>
      {settings_links.map((link, i) => {
        return (
          <div
            className={styles.option}
            key={i}
            onClick={() => dispatch(set_current_settings(link.onclick_fuction))}
          >
            <Image src={link.icon} width={13} height={13}></Image>
            <p
              className={
                selected_setting === link.onclick_fuction
                  ? styles.active_option_link
                  : styles.option_links
              }
            >
              {link.name}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default LeftSide
