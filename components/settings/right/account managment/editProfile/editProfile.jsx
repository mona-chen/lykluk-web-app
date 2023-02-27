import styles from './style.module.css'
import Image from 'next/image'
import GoBackIcon from '../goBackIcon/goBackIcon'
import { useState, useEffect } from 'react'
import { ButtonPrimary } from '../../../../buttons/ButtonReuse'
import { useSelector, useDispatch } from 'react-redux'
import { editProfile } from '../../../../../redux/settings'
import { useRouter } from 'next/router'

const defaultFormFields = {
  name: '',
  dob: '',
  websites: '',
  instagramLink: '',
  twitterLink: '',
  facebookLink: '',
  bio: '',
}
const EditProfile = ({ goBackToMainPage }) => {
  const router = useRouter()
  useEffect(() => {
    if (isProfileEdited) {
      router.push('/')
    }
  })
  const dispatch = useDispatch()
  const { isProfileEdited } = useSelector((state) => state.settings)
  //   const user = useSelector((state) => state.user)
  //   console.log('this is the user', user)
  const [formFields, setFormFeilds] = useState(defaultFormFields)
  const { name, dob, instagramLink, twitterLink, facebookLink, bio, websites } =
    formFields

  const [nameError, setNameError] = useState(false)
  const validateInputs = () => {
    if (!name.trim()) {
      setNameError(true)
      return
    } else {
      setNameError(false)
    }
    dispatch(
      editProfile({
        name,
        dob,
        bio,
        websites,
        instagramLink,
        facebookLink,
        twitterLink,
      })
    )
  }

  const inputFeilds = [
    {
      name: 'name',
      value: name,
      type: 'text',
      inputFeildName: 'name',
      error: 'present',
      errorName: nameError,
      errorMessage: 'please input a name',
    },
    {
      name: 'dob',
      value: dob,
      type: 'date',
      inputFeildName: 'date of birth',
    },
    {
      name: 'websites',
      value: websites,
      type: 'text',
      inputFeildName: 'Website Link',
    },
    {
      name: 'instagramLink',
      value: instagramLink,
      type: 'text',
      inputFeildName: 'Instagram Link',
    },
    {
      name: 'twitterLink',
      value: twitterLink,
      type: 'text',
      inputFeildName: 'Twitter Link',
    },
    {
      name: 'facebookLink',
      value: facebookLink,
      type: 'text',
      inputFeildName: 'Facebook Link',
    },
    {
      name: 'bio',
      value: bio,
      type: 'text',
      inputFeildName: 'Bio',
    },
  ]
  const changeFunction = (e) => {
    const { name, value } = e.target
    setFormFeilds({ ...formFields, [name]: value })
  }

  return (
    <div className={styles.main_div}>
      <GoBackIcon action={goBackToMainPage}></GoBackIcon>

      <div className={styles.profile_pic_div}>
        <Image src="/profilePic.svg" width={90} height={90}></Image>
      </div>
      <p className={styles.profile_pic_change_text}>Change Profile Photo</p>
      {inputFeilds.map((input, i) => {
        return (
          <div className={styles.input_field_div} key={i}>
            <p className={styles.label}>{input.inputFeildName}</p>
            <input
              type={input.type}
              value={input.value}
              name={input.name}
              onChange={changeFunction}
            />
            {input.error ? (
              <p className={styles.error_message}>
                {input.errorName ? input.errorMessage : null}
              </p>
            ) : null}
          </div>
        )
      })}
      <div className={styles.button_div}>
        <ButtonPrimary width={'100%'} action={validateInputs}>
          {' '}
          Save Changes
        </ButtonPrimary>
      </div>
    </div>
  )
}

export default EditProfile
