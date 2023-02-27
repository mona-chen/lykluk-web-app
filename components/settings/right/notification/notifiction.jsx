import styles from './style.module.css'
import { ButtonPrimary } from '../../../buttons/ButtonReuse'
const Notification = () => {
  return (
    <>
      <div className="">
        <h3 className={styles.main_heading}>Likes</h3>
        <div className={styles.section}>
          <div className={styles.content_div}>
            <div className={styles.left}>
              <p>From everyone</p>
            </div>
            <div className={styles.right}>
              <input
                className={styles.checkbox}
                type="checkbox"
                name=""
                id=""
              />
            </div>
          </div>
          <div className={styles.content_div}>
            <div className={styles.left}>
              <p>From followings</p>
            </div>
            <div className={styles.right}>
              <input
                className={styles.checkbox}
                type="checkbox"
                name=""
                id=""
              />
            </div>
          </div>
          <div className={styles.content_div}>
            <div className={styles.left}>
              <p>private accounts</p>
            </div>
            <div className={styles.right}>
              <input
                className={styles.checkbox}
                type="checkbox"
                name=""
                id=""
              />
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <h3 className={styles.main_heading}>Comments</h3>
          <div className={styles.content_div}>
            <div className={styles.left}>
              <p>From everyone</p>
            </div>
            <div className={styles.right}>
              <input
                className={styles.checkbox}
                type="checkbox"
                name=""
                id=""
              />
            </div>
          </div>
          <div className={styles.content_div}>
            <div className={styles.left}>
              <p>From followings</p>
            </div>
            <div className={styles.right}>
              <input
                className={styles.checkbox}
                type="checkbox"
                name=""
                id=""
              />
            </div>
          </div>
          <div className={styles.content_div}>
            <div className={styles.left}>
              <p>private accounts</p>
            </div>
            <div className={styles.right}>
              <input
                className={styles.checkbox}
                type="checkbox"
                name=""
                id=""
              />
            </div>
          </div>
        </div>
        <ButtonPrimary width={'200px'}>Save Changes</ButtonPrimary>
      </div>
    </>
  )
}

export default Notification
