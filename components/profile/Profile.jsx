import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import env from '../../env';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { ButtonPrimary } from '../buttons/ButtonReuse';
import { profileIcons } from '../../assets/icons/profileIcons';

export default function ProfileComponent() {

    const [account,setAccount] = useState({})
    const {profile } = account;

    // console.warn(user)
    const { user, loadLogout } = useSelector((state) => state.user)

    /* we are temporarily storing redux states in react state to prevent hydration error.
    this is issue #1 and should be resolved */
    useEffect(() => {
      setAccount(user)
    }, [user])

    //hydration error fix ends here
    

  return (
    <div className={style.profile_wrapper}>
        <div className={style.profile_details_wrapper}>
            <figure>
            <Image src={env.cloudfront + profile?.avatar} alt={'profile'} width='500' height='500' />
            </figure>
            <div className={style.top_details_wrapper}>
            <div className={style.top_details}>
                    <div>
                        <h2>
                            {profile?.name}
                        </h2>
                        <span>
                            {account?.username}
                            <figure>{profileIcons.share}</figure>  
                        </span>
                    </div>
                    <div>
                        <ButtonPrimary
                        fill='white'
                        icon={profileIcons.edit}
                        svg
                        padding="1rem 1rem"
                        gap= "2rem"
                        border='1px solid #8E00FE'
                        color="black"
                        >
                            Edit Profile

                        </ButtonPrimary>

                    </div>

            </div>
            <div className={style.bottom_details}>
                    <div>
                        <div>
                            <b>134</b>
                            Following
                        </div>

                        <div>
                            <b>134</b>
                            Followers
                        </div>

                        <div>
                            <b>134</b>
                            Likes
                        </div>
                   
                    </div>
                    <div>
                        <figure>
                            {profileIcons.add_account}
                        </figure>

                        <figure>
                            {profileIcons.gear}
                        </figure>
                    </div>

            </div>
            </div>

            
        </div>

        <div className={style.bio_contain}>
                <h2>Bio</h2>
                <small>A tiger ran over a lion</small>
                
            </div>

            <div className={style.video_gallery}>
                <div className={style.gallery_toggle}>

                </div>
            </div>
             
        
    </div>
  )
}
