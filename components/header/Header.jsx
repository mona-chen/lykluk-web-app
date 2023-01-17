import React, { useState } from 'react'
const logo = require('./images/logo.png')
const search_icon = require('./images/search_icon.svg')
import Image from 'next/image'
import {
  ButtonPrimary,
  ButtonSecondary,
  IconButton,
} from '../buttons/ButtonReuse'
import style from './style.module.css'
import addIcon from './images/addIcon.svg'

const Header = () => {
  const [search, setSearch] = useState()
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
        <ButtonPrimary>Log in</ButtonPrimary>
      </div>
    </div>
  )
}

export default Header
