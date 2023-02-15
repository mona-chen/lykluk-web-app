import styles from './style.module.css'
import { Hr } from '../../horizontalRule/hr'
import Image from 'next/image'
import Link from 'next/link'
import { ButtonPrimary } from '../../../buttons/ButtonReuse'
const Privacy = () => {
  return (
    <>
      <h3 className={styles.main_heading}>Account Preference</h3>
      <div className={styles.content_div}>
        <div className={styles.left}>
          <h4>Private Account</h4>
          <p>
            When your account is made private, only followers can make comments
            on your posts or view your profile.
          </p>
        </div>
        <div className={styles.right}>
          <input className={styles.checkbox} type="checkbox" name="" id="" />
        </div>
      </div>
      <div className={styles.content_div}>
        <div className={styles.left}>
          <h4>Public Account</h4>
          <p>
            When your account is made public, your posts, profile and comments
            can be seen by everyone.
          </p>
        </div>
        <div className={styles.right}>
          <input className={styles.checkbox} type="checkbox" name="" id="" />
        </div>
      </div>
      <Hr color={'rgba(238, 238, 238, 1)'} marginBottom={'3rem'}></Hr>
      <h3 className={styles.main_heading}>Account Preference</h3>
      <div className={styles.content_div}>
        <div className={styles.left}>
          <h4>Request Download</h4>
          <p>Get a copy of all data by clicking on the button</p>
        </div>
        <div className={styles.right}>
          <Image src="/download.svg" width={'23'} height={'23'}></Image>
        </div>
      </div>
      <Hr color={'rgba(238, 238, 238, 1)'} marginBottom={'3rem'}></Hr>
      <h3 className={styles.main_heading}>
        Help{' '}
        <Image src={'/alert-circle.svg'} width={'10'} height={'10'}></Image>
      </h3>

      <Link href="/">
        <p className={styles.contact_link}>contact support</p>
      </Link>
      <ButtonPrimary width={'200px'}>Save Changes</ButtonPrimary>
    </>
  )
}

export default Privacy
