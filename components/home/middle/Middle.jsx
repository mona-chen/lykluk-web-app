import Image from 'next/image'
import React from 'react'
import style from './style.module.css'
import { ButtonPrimary } from '../../buttons/ButtonReuse';

const Middle = () => {

  const verifiedIcon = (<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6.59961C12 9.91341 9.3138 12.5996 6 12.5996C2.68632 12.5996 0 9.91341 0 6.59961C0 3.28593 2.68632 0.599609 6 0.599609C9.3138 0.599609 12 3.28593 12 6.59961Z" fill="#A257DC" fill-opacity="0.53"/>
<path d="M12 6C12 9.3138 9.3138 12 6 12C2.68632 12 0 9.3138 0 6C0 2.68632 2.68632 0 6 0C9.3138 0 12 2.68632 12 6Z" fill="#8E00FE"/>
<path d="M8.39844 4.19971L4.79844 7.79971L3.29844 6.29971L2.02344 7.55969L3.52344 9.05969L4.72344 10.2597L4.79844 10.3197L9.67344 5.45969L8.39844 4.19971Z" fill="#A257DC" fill-opacity="0.53"/>
<path d="M8.39844 3.59961L4.79844 7.19961L3.29844 5.69961L2.02344 6.95959L3.52344 8.45959L4.72344 9.6596L4.79844 9.71958L9.67344 4.85959L8.39844 3.59961Z" fill="#ECF0F1"/>
</svg>
)

  return (
   <div className={style.main_middle_wrapper}>
    <div className={style.feed_wrapper}>
      <div className={style.feed}>
      <div className={style.user}>
          <figure>
            <Image src="https://divineflaver.com/wp-content/uploads/2022/01/1428.jpg" alt="" width="150" height="150" />
          </figure>
          <div className={style.user_info}>
          <span>Brooklyn Simmons</span>
          <span>@BrooklynSimmons <figure>{verifiedIcon}</figure></span>
          </div>

    <div className="follow_btn">
          <ButtonPrimary
          padding="1rem 2rem"
          >
            Follow
          </ButtonPrimary>
    </div>
         

    </div>


      </div>
   
      <div className="feed_player_wrapper">

      </div>


    </div>

   </div>
  )
}

export default Middle