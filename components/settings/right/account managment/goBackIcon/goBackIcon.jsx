/* eslint-disable jsx-a11y/no-static-element-interactions */
import styles from './style.module.css'
import Image from 'next/image'
const GoBackIcon = ({ action }) => {
  return (
    <>
      <div className={styles.icon_div} onClick={action}>
        <Image src="go_back_settings.svg" width={20} height={20}></Image>
      </div>
    </>
  )
}

export default GoBackIcon
