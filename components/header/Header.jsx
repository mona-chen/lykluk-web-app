import React, { useState } from 'react'
const logo = require('./images/logo.png')
const search_icon = require('./images/search_icon.svg')
import Image from 'next/image'
import {
  ButtonPrimary
} from '../buttons/ButtonReuse'
import style from './style.module.css'
import addIcon from './images/addIcon.svg'
import AuthModal from '../modal/auth/AuthModal'
import { useSelector } from 'react-redux';
import { homeIcons } from '../../assets/icons/homeIcons';
import { useEffect } from 'react';
import env from '../../env';
import { ThreeDots } from 'react-loader-spinner';



const Header = () => {
  const [search, setSearch] = useState()
  const [pop, setPop] = useState(false)
  const [profile, setProfile] = useState({})
  const [profileDrop, setProfileDrop] = useState(true)
  // retrieve posts from redux
  const { user, loadLogout } = useSelector((state) => state.user)

  useEffect(() => {
    setProfile(user.profile)
  }, [user])
  
  return (
    <div className={style.header_main_wrapper}>
      <figure className={style.header_logo}>
        <Image src={logo} alt="" width="100%" height="100%" />
      </figure>
      <div className={style.header_search}>
        <Image src={search_icon} alt="" width="100%" height="100%" />
        <input
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className=" "
        />
      </div>

      {!profile ? 
      <div className={style.header_act_btn}>
          <ButtonPrimary
          btnStyle={style.signup_btn}
          fill="white"
          color="black"
          padding="0.5rem 2rem"
          icon={addIcon}
        >
          Post
        </ButtonPrimary>
        <ButtonPrimary action={() => setPop(true)}>Log in</ButtonPrimary>
      </div>       
       :
       <div className={style.header_act_btn_loggedin}>
       <figure>
         {homeIcons.header_post}
         <span>Post</span>
       </figure>
       <figure>
         {homeIcons.notification}
         <span>Notification</span>
       </figure>
       <figure>
        <Image src={env.cloudfront + profile.avatar} alt={'profile'} width='500' height='500' />
       </figure>
       {/* profile box start */}
        
      {/* profile box end */}
       </div> 
       }
      <AuthModal
        show={pop}
        onClose={(close) => {
          setPop(close);
        }}
      ></AuthModal>
    </div>
  )
}

export default Header
