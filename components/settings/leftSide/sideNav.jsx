/* eslint-disable jsx-a11y/no-static-element-interactions */
import styles from './style.module.css'
import { settings_links } from './leftSide'
import { useDispatch, useSelector } from 'react-redux'
import { set_current_settings } from '../../../redux/settings'
import { Icon } from '@iconify/react'
import Image from 'next/image'
const SideNav = ({ closeModal }) => {
  const dispatch = useDispatch()
  const { selected_setting } = useSelector((state) => state.settings)
  const goto_settings_and_close_modal = (link) => {
    dispatch(set_current_settings(link))
    closeModal()
  }
  return (
    <>
      <div className={styles.side_nav_div}>
        <div className={styles.side_nav_inner_div}>
          <div className={styles.close_nav_icon} onClick={closeModal}>
            <Icon icon="ic:round-close" width="40" height="40" />
          </div>
          {settings_links.map((link, i) => {
            return (
              <div
                className={styles.option}
                key={i}
                onClick={() => {
                  goto_settings_and_close_modal(link.onclick_fuction)
                }}
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
      </div>
      <div className={styles.overlay} onClick={closeModal}></div>
    </>
  )
}

export default SideNav
