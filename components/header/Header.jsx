/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react'
const logo = require('./images/logo.png')
const search_icon = require('./images/search_icon.svg')
import Image from 'next/image'
import { ButtonPrimary } from '../buttons/ButtonReuse'
import style from './style.module.css'
import addIcon from './images/addIcon.svg'
import AuthModal from '../modal/auth/AuthModal'
import { useSelector } from 'react-redux'
import { homeIcons } from '../../assets/icons/homeIcons'
import { useEffect } from 'react'
import env from '../../env'
// import { ThreeDots } from 'react-loader-spinner';
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { setAuthModal } from '../../redux/home'
import Link from 'next/link'

const Header = () => {
  const [search, setSearch] = useState()
  const [pop, setPop] = useState(false)
  const [profile, setProfile] = useState({})
  const [profileDrop, setProfileDrop] = useState(false)
  // retrieve posts from redux
  const { user, loadLogout } = useSelector((state) => state.user)
  const { authModal } = useSelector((state) => state.home)

  useEffect(() => {
    setProfile(user?.profile)
  }, [user])

  const handleLogout = () => {
    toast.success('You have been logged out successfully')
    localStorage.clear()
    window.location.reload(false)
  }

  let username = user?.username

  const dispatch = useDispatch()

  const handleClose = () => dispatch(setAuthModal(false))
  const handleOpen = () => dispatch(setAuthModal(true))

  return (
    <div className={style.header_main_wrapper}>
      <figure className={style.header_logo}>
        <Link href={`${env?.app_url}`}>
          <Image src={logo} alt="" width="100%" height="100%" />
        </Link>
      </figure>
      <div className={`desktop-only ${style.header_search}`}>
        <Image src={search_icon} alt="" width="100%" height="100%" />
        <input
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className=" "
        />
      </div>

      {!profile ? (
        <div className={style.header_act_btn}>
          <ButtonPrimary
            btnStyle={style.signup_btn}
            fill="white"
            action={handleOpen}
            color="black"
            padding="0.5rem 2rem"
            icon={addIcon}
          >
            Post
          </ButtonPrimary>
          <ButtonPrimary action={handleOpen}>Log in</ButtonPrimary>
        </div>
      ) : (
        <div className={style.header_act_btn_loggedin}>
          <Link href={'/create'}>
            <figure>
              {homeIcons.header_post}
              <span>Post</span>
            </figure>
          </Link>
          <figure>
            {homeIcons.notification}
            <span>Notification</span>
          </figure>
          <figure
            onMouseEnter={() => setProfileDrop(true)}
            onClick={() => setProfileDrop(!profileDrop)}
          >
            <Image
              src={env.cloudfront + profile.avatar}
              alt={'profile'}
              width="500"
              height="500"
            />
          </figure>

          {/* profile box start */}
          <div
            onMouseLeave={() => setProfileDrop(false)}
            className={`${style.profile_drop_wrapper} ${
              profileDrop && style.profile_drop_show
            }`}
          >
            <Link
              href={`${env.app_url}/u/${username?.slice(
                1,
                user?.username.length
              )}`}
            >
              <span>
                {homeIcons.settings}
                View Profile
              </span>
            </Link>

            <span>
              {homeIcons.language}
              Language
            </span>
            <span onClick={() => handleLogout()}>
              {homeIcons.logout}
              Logout
            </span>
          </div>

          {/* profile box end */}
        </div>
      )}
      <AuthModal show={authModal} onClose={handleClose}></AuthModal>
    </div>
  )
}

export default Header
