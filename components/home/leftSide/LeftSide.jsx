import Image from 'next/image'
import React from 'react'
import { ButtonPrimary } from '../../buttons/ButtonReuse'
import style from './style.module.css'
import Link from 'next/link'

const foryouIcon = (
  <svg
    width="36"
    height="35"
    viewBox="0 0 36 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.48944 5.27561C12.9341 2.04635 15.1565 0.431716 17.6945 0.33861C17.8981 0.331141 18.1019 0.331141 18.3055 0.33861C20.8435 0.431716 23.0659 2.04635 27.5106 5.27561C31.9553 8.50486 34.1776 10.1195 35.0505 12.5045C35.1205 12.6959 35.1835 12.8897 35.2393 13.0856C35.935 15.5282 35.0861 18.1407 33.3884 23.3658L30.5201 32.1937C30.0643 33.5964 28.7571 34.5461 27.2823 34.5461C25.4021 34.5461 23.8779 33.0219 23.8779 31.1417V26.5602C23.8779 24.7959 22.4477 23.3658 20.6835 23.3658H15.3165C13.5523 23.3658 12.1222 24.7959 12.1222 26.5602V31.1417C12.1222 33.0219 10.598 34.5461 8.71775 34.5461C7.24287 34.5461 5.93573 33.5964 5.47997 32.1937L2.61159 23.3658C0.91387 18.1407 0.0650094 15.5282 0.760752 13.0856C0.816564 12.8897 0.879543 12.6959 0.949562 12.5045C1.8224 10.1195 4.04475 8.50486 8.48944 5.27561Z"
      fill="#8E00FE"
    />
  </svg>
)

const discoverIcon = (
  <svg
    width="41"
    height="41"
    viewBox="0 0 41 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.0018 38.1988C30.0474 38.1988 38.191 30.0552 38.191 20.0096C38.191 9.96392 30.0474 1.82031 20.0018 1.82031C9.95611 1.82031 1.8125 9.96392 1.8125 20.0096C1.8125 30.0552 9.95611 38.1988 20.0018 38.1988Z"
      fill="black"
    />
    <path
      d="M16.1267 16.1502L13.1953 26.8015L23.8831 23.8701L26.7963 13.2188L16.1267 16.1502Z"
      fill="black"
    />
    <path
      d="M13.2003 28.6383C12.727 28.6383 12.2536 28.4562 11.9076 28.1102C11.4524 27.6551 11.2704 26.9632 11.4342 26.3441L14.3656 15.6745C14.5477 15.0373 15.0393 14.5457 15.6584 14.3818L26.3279 11.4504C26.9652 11.2865 27.6389 11.4504 28.0941 11.9238C28.5492 12.379 28.7313 13.0709 28.5674 13.6899L25.636 24.3595C25.4722 24.9786 24.9806 25.4702 24.3615 25.634L13.6919 28.5654C13.5281 28.6018 13.3642 28.6383 13.2003 28.6383ZM17.6248 17.6227L15.8222 24.2138L22.4133 22.3931L24.2159 15.802L17.6248 17.6227Z"
      fill="white"
    />
    <path
      d="M20.01 40.02C8.97628 40.02 0 31.0437 0 20.01C0 8.97628 8.97628 0 20.01 0C31.0437 0 40.02 8.97628 40.02 20.01C40.02 31.0437 31.0437 40.02 20.01 40.02ZM20.01 3.64149C10.9791 3.64149 3.64149 10.9791 3.64149 20.01C3.64149 29.0409 10.9791 36.3785 20.01 36.3785C29.0409 36.3785 36.3785 29.0409 36.3785 20.01C36.3785 10.9791 29.0409 3.64149 20.01 3.64149Z"
      fill="black"
    />
  </svg>
)

const followingIcon = (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 15C15 12.1667 17.1667 10 20 10C22.8333 10 25 12.1667 25 15C25 17.8333 22.8333 20 20 20C17.1667 20 15 17.8333 15 15ZM20 23.3333C12.3333 23.3333 10 28.8333 10 28.8333V31.6667H30V28.8333C30 28.8333 27.6667 23.3333 20 23.3333Z"
      fill="black"
    />
    <path
      d="M30.8385 18.3333C33.1397 18.3333 35.0052 16.4679 35.0052 14.1667C35.0052 11.8655 33.1397 10 30.8385 10C28.5374 10 26.6719 11.8655 26.6719 14.1667C26.6719 16.4679 28.5374 18.3333 30.8385 18.3333Z"
      fill="black"
    />
    <path
      d="M30.8385 21.666C28.8385 21.666 27.3385 22.166 26.1719 22.9993C30.0052 24.8327 31.5052 27.9993 31.5052 28.3327V28.4993H38.3385V26.3327C38.3385 26.166 36.5052 21.666 30.8385 21.666Z"
      fill="black"
    />
    <path
      d="M30.8385 18.3333C33.1397 18.3333 35.0052 16.4679 35.0052 14.1667C35.0052 11.8655 33.1397 10 30.8385 10C28.5374 10 26.6719 11.8655 26.6719 14.1667C26.6719 16.4679 28.5374 18.3333 30.8385 18.3333Z"
      fill="black"
    />
    <path
      d="M30.8385 21.666C28.8385 21.666 27.3385 22.166 26.1719 22.9993C30.0052 24.8327 31.5052 27.9993 31.5052 28.3327V28.4993H38.3385V26.3327C38.3385 26.166 36.5052 21.666 30.8385 21.666Z"
      fill="black"
    />
    <path
      d="M9.16667 18.3333C11.4679 18.3333 13.3333 16.4679 13.3333 14.1667C13.3333 11.8655 11.4679 10 9.16667 10C6.86548 10 5 11.8655 5 14.1667C5 16.4679 6.86548 18.3333 9.16667 18.3333Z"
      fill="black"
    />
    <path
      d="M9.17188 21.666C11.1719 21.666 12.6719 22.166 13.8385 22.9993C10.0052 24.8327 8.50521 27.9993 8.50521 28.3327V28.4993H1.67188V26.3327C1.67188 26.166 3.50521 21.666 9.17188 21.666Z"
      fill="black"
    />
  </svg>
)

const verifiedIcon = (
  <svg
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 6.59961C12 9.91341 9.3138 12.5996 6 12.5996C2.68632 12.5996 0 9.91341 0 6.59961C0 3.28593 2.68632 0.599609 6 0.599609C9.3138 0.599609 12 3.28593 12 6.59961Z"
      fill="#A257DC"
      fill-opacity="0.53"
    />
    <path
      d="M12 6C12 9.3138 9.3138 12 6 12C2.68632 12 0 9.3138 0 6C0 2.68632 2.68632 0 6 0C9.3138 0 12 2.68632 12 6Z"
      fill="#8E00FE"
    />
    <path
      d="M8.39844 4.19971L4.79844 7.79971L3.29844 6.29971L2.02344 7.55969L3.52344 9.05969L4.72344 10.2597L4.79844 10.3197L9.67344 5.45969L8.39844 4.19971Z"
      fill="#A257DC"
      fill-opacity="0.53"
    />
    <path
      d="M8.39844 3.59961L4.79844 7.19961L3.29844 5.69961L2.02344 6.95959L3.52344 8.45959L4.72344 9.6596L4.79844 9.71958L9.67344 4.85959L8.39844 3.59961Z"
      fill="#ECF0F1"
    />
  </svg>
)

const LeftSide = () => {
  return (
    <div className={style.main_leftside_wrapper}>
      <div className={style.left_quick_actions}>
        <div className={style.item}>
          <figure>{foryouIcon}</figure>
          <span>Luk </span>
        </div>

        <div className={style.item}>
          <figure>{discoverIcon}</figure>
          <span>Discover </span>
        </div>

        <div className={style.item}>
          <figure>{followingIcon}</figure>
          <span>Following </span>
        </div>
      </div>

      <div className={style.dont_have_an_account}>
        <span>
          Don’t have an Account? Sign Up to share videos, follow creators, like
          videos and make comments
        </span>
        <ButtonPrimary btnStyle={style.signup_btn} fill="none" width="100%">
          Sign Up
        </ButtonPrimary>
      </div>

      <div className={style.popular_accounts_wrapper}>
        <h3>Popular Accounts</h3>
        <div className={style.popular_accounts}>
          <div className={style.accounts_wrapper}>
            <div className={style.accounts}>
              <div className={style.user}>
                <figure>
                  <Image
                    src="https://divineflaver.com/wp-content/uploads/2022/01/1428.jpg"
                    alt=""
                    width="150"
                    height="150"
                  />
                </figure>
                <div className={style.user_info}>
                  <span>
                    Davido <figure>{verifiedIcon}</figure>
                  </span>
                  <span>@davido</span>
                </div>
              </div>
              <div className="follow_btn">
                <ButtonPrimary padding="0.5rem 2rem" fontSize="1.4rem">
                  Follow
                </ButtonPrimary>
              </div>
            </div>

            <div className={style.accounts}>
              <div className={style.user}>
                <figure>
                  <Image
                    src="https://divineflaver.com/wp-content/uploads/2022/01/1428.jpg"
                    alt=""
                    width="150"
                    height="150"
                  />
                </figure>
                <div className={style.user_info}>
                  <span>
                    Davido <figure>{verifiedIcon}</figure>
                  </span>
                  <span>@davido</span>
                </div>
              </div>
              <div className="follow_btn">
                <ButtonPrimary padding="0.5rem 2rem" fontSize="1.4rem">
                  Follow
                </ButtonPrimary>
              </div>
            </div>

            <div className={style.accounts}>
              <div className={style.user}>
                <figure>
                  <Image
                    src="https://divineflaver.com/wp-content/uploads/2022/01/1428.jpg"
                    alt=""
                    width="150"
                    height="150"
                  />
                </figure>
                <div className={style.user_info}>
                  <span>
                    Davido <figure>{verifiedIcon}</figure>
                  </span>
                  <span>@davido</span>
                </div>
              </div>
              <div className="follow_btn">
                <ButtonPrimary padding="0.5rem 2rem" fontSize="1.4rem">
                  Follow
                </ButtonPrimary>
              </div>
            </div>
          </div>
        </div>

        <Link href="/">See more</Link>
      </div>

      <div className={style.trending_hashtags}>
        <h3>Trending Hashtags</h3>
        <div className={style.hashtags_wrapper}>
          <span>#obix</span>
          <span>#obix</span>
          <span>#obix</span>
          <span>#obix</span>
          <span>#obix</span>
          <span>#obix</span>
        </div>
      </div>
    </div>
  )
}

export default LeftSide
