import styles from './style.module.css'
import Image from 'next/image'
const QRCode = () => {
  return (
    <div className={styles.main_container}>
      <h3 className={styles.main_heading}>QR Code</h3>
      <div className={styles.QR_container}>
        <div className={styles.inner_div}>
          <div className={styles.profile_div}>
            <Image src={'/profilePic.svg'} width={70} height={70}></Image>
          </div>
          <p>@najib2557</p>
          <Image src={'/qrCode.svg'} width={200} height={200}></Image>
          <p>Share your QR code so others can follow you</p>
        </div>
      </div>
    </div>
  )
}

export default QRCode
