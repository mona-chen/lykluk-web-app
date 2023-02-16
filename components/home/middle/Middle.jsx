/* eslint-disable jsx-a11y/no-static-element-interactions */
import Image from 'next/image'
import React, { useState } from 'react'
import style from './style.module.css'
import { ButtonPrimary } from '../../buttons/ButtonReuse'
import Link from 'next/link'
const album = require('../../../assets/images/album_placeholder.png')
import dynamic from 'next/dynamic'
// const ReactPlayer = dynamic(() => import("react-player"), { ssr: true });
import env from '../../../env'
import ReactPlayer from 'react-player/lazy'
import LukPlayer from '../../video/LukPlayer'
import { followUser } from '../../../redux/profile'
import { useDispatch, useSelector } from 'react-redux'
import { ThreeDots } from 'react-loader-spinner'
import { setAuthModal } from '../../../redux/home'
import SingleVideo from '../../modal/singleVideo/Modal'
import {
  dislikeVideo,
  likeVideo,
  setVideo,
  setVideoModal,
} from '../../../redux/video'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { mobileIcons, Sound } from '../../../assets/icons/mobileIcons'

const Middle = ({ posts, user, trending, setPop }) => {
  const playerRef = React.useRef(null)
  const lukRef = React.useRef(null)
  const observerRef = React.useRef(null)



  const videoJsOptions = {
    // autoplay: true,
    controls: true,
    autoplay: false,
    responsive: true,
    controlBar: {
      fullscreenToggle: false,
    },
    preload: 'true',
    fluid: true,
    width: 20,
    height: 50,
    loop: true,
    aspectRatio: '9:16',
    html5: {
      nativeControlsForTouch: false, // This prevents the native fullscreen control from being used
      // hls: {
      //   withCredentials: true,
      // },
      // Add the playsinline attribute to the video element
      attributes: {
        playsinline: true,
      },
    },
  }

  const handlePlayerReady = (player) => {
    playerRef.current = player

    console.log(player, 'this')

    // / You can handle player events here, for example:
    player.on('waiting', () => {
      // videojs.log('player is waiting')
    })

    player.on('fullscreenchange', function () {
      if (player.isFullscreen()) {
        player.exitFullscreen()
      }
    })

    player.on('dispose', () => {
      // videojs.log('player will dispose')
    })
  }

  const dispatch = useDispatch()

  const handleAuthOpen = () => dispatch(setAuthModal(true))
  const handleVideoOpen = (e) => {
    dispatch(setVideoModal(true))
    dispatch(setVideo(e))
  }
  const handleVideoClose = () => dispatch(setVideoModal(false))

  const { videoModal, playing } = useSelector((state) => state.video)

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
        fillOpacity="0.53"
      />
      <path
        d="M12 6C12 9.3138 9.3138 12 6 12C2.68632 12 0 9.3138 0 6C0 2.68632 2.68632 0 6 0C9.3138 0 12 2.68632 12 6Z"
        fill="#8E00FE"
      />
      <path
        d="M8.39844 4.19971L4.79844 7.79971L3.29844 6.29971L2.02344 7.55969L3.52344 9.05969L4.72344 10.2597L4.79844 10.3197L9.67344 5.45969L8.39844 4.19971Z"
        fill="#A257DC"
        fillOpacity="0.53"
      />
      <path
        d="M8.39844 3.59961L4.79844 7.19961L3.29844 5.69961L2.02344 6.95959L3.52344 8.45959L4.72344 9.6596L4.79844 9.71958L9.67344 4.85959L8.39844 3.59961Z"
        fill="#ECF0F1"
      />
    </svg>
  )

  const icon = {
    dislike: (
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="25" cy="25" r="25" fill="#ECECEC" />
        <path
          d="M37.2795 15.8615C34.8786 13.3572 31.4274 12.4181 28.1262 13.3572L24.0747 23.2178L28.2763 24.3135C29.0265 24.47 29.6267 25.4091 29.3266 26.1917C29.3266 26.3482 29.3266 26.3482 29.1766 26.5047L26.1755 32.7654C26.0254 33.3915 25.5753 33.7045 24.9751 33.7045C24.675 33.7045 24.5249 33.7045 24.3749 33.548C23.6246 33.235 23.3245 32.2959 23.6246 31.5133L25.7253 26.9743L21.6739 25.8787C20.7736 25.5656 20.3234 24.783 20.4735 24.0004C20.4735 23.8439 20.4735 23.8439 20.4735 23.8439L24.2248 14.7659C20.0233 11.6355 14.1712 13.0442 11.4702 17.5832C9.06936 21.4961 9.66957 26.5047 12.8207 29.7916L24.0747 41.5304C24.675 42.1565 25.5753 42.1565 26.1755 41.5304L37.4295 29.7916C40.8808 25.8787 40.8808 19.7745 37.2795 15.8615Z"
          fill="#BA6FF6"
        />
      </svg>
    ),
    like: (
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="25" cy="25" r="25" fill="#ECECEC" />
        <path
          d="M36.6207 16.5052C33.2167 13.0338 29.2749 14.4979 26.8342 16.0461C25.455 16.921 23.5446 16.921 22.1655 16.0461C19.7247 14.4979 15.783 13.0338 12.3789 16.5052C4.29829 24.7457 18.1559 40.625 24.4999 40.625C30.8438 40.625 44.7014 24.7457 36.6207 16.5052Z"
          fill="#8E00FE"
          fillOpacity="0.53"
        />
      </svg>
    ),
    comment: (
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="25" cy="25" r="25" fill="#ECECEC" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M37.9727 29.9012C40.7972 24.4911 38.1083 18.0737 35.0175 14.9828C29.4851 9.45039 20.5152 9.45039 14.9828 14.9828C9.45039 20.5152 9.45039 29.4851 14.9828 35.0175C18.2051 38.2398 24.5128 40.8192 29.9032 37.976C30.4571 37.6838 30.7343 37.5376 30.8697 37.4831C31.4417 37.2531 31.7426 37.218 32.3521 37.3105C32.4964 37.3325 32.6853 37.3814 33.0629 37.4793C34.1958 37.7729 34.7625 37.9198 35.1754 37.9049C36.6602 37.8514 37.8514 36.6602 37.9049 35.1754C37.9198 34.7625 37.773 34.196 37.4793 33.0631C37.3815 32.6855 37.3325 32.4966 37.3106 32.3531C37.2178 31.7436 37.2512 31.4514 37.4791 30.8786C37.5328 30.7437 37.6794 30.4629 37.9727 29.9012ZM20.5489 24.7989C20.5489 25.5813 19.9146 26.2155 19.1322 26.2155C18.3498 26.2155 17.7155 25.5813 17.7155 24.7989C17.7155 24.0165 18.3498 23.3822 19.1322 23.3822C19.9146 23.3822 20.5489 24.0165 20.5489 24.7989ZM26.2155 24.7989C26.2155 25.5813 25.5813 26.2155 24.7989 26.2155C24.0165 26.2155 23.3822 25.5813 23.3822 24.7989C23.3822 24.0165 24.0165 23.3822 24.7989 23.3822C25.5813 23.3822 26.2155 24.0165 26.2155 24.7989ZM30.4655 26.2155C31.2479 26.2155 31.8822 25.5813 31.8822 24.7989C31.8822 24.0165 31.2479 23.3822 30.4655 23.3822C29.6831 23.3822 29.0489 24.0165 29.0489 24.7989C29.0489 25.5813 29.6831 26.2155 30.4655 26.2155Z"
          fill="#8E00FE"
          fillOpacity="0.53"
        />
      </svg>
    ),
    share: (
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="25" cy="25" r="25" fill="#ECECEC" />
        <g clipPath="url(#clip0_2259_7470)">
          <path
            d="M27.875 27.7024C21.5583 27.7024 16.1889 30.9515 14.125 35.5V34.1154C14.125 25.8434 20.2039 19.0963 27.875 18.5903V12.125L38.875 23.125L27.875 34.125V27.7079"
            fill="#8E00FE"
            fillOpacity="0.53"
          />
          <path
            d="M27.875 27.7024C21.5583 27.7024 16.1889 30.9515 14.125 35.5V34.1154C14.125 25.8434 20.2039 19.0963 27.875 18.5903V12.125L38.875 23.125L27.875 34.125V27.7079"
            stroke="#8E00FE"
            strokeOpacity="0.53"
            strokeWidth="2.0625"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2259_7470">
            <rect
              width="33"
              height="33"
              fill="white"
              transform="matrix(-1 0 0 1 43 8)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  }

  const [following, setFollowing] = useState([])
  const [likes, setLike] = useState([])
  const [dislike, setDislike] = useState([])

  const { followLoading } = useSelector((state) => state.profile)

  // handle video following
  const follow = async (e) => {
    const data = await dispatch(followUser(e))

    // alert('folloe')
    if (data?.payload?.success) {
      console.log(data?.payload)
      if (data?.payload?.data?.follow) {
        setFollowing([...following, data.payload?.data?.following.username])
      }
    }

    if (!data?.payload?.data?.follow) {
      setFollowing(
        following.filter((val) => val !== data.payload?.data?.username)
      )
    }
  }

  //handle video like
  const like = async (e) => {
    const data = await dispatch(likeVideo(e))

    // alert('folloe')
    if (data?.payload?.success) {
      console.log(data?.payload)
      if (data?.payload?.data?.like) {
        setLike([...likes, e])
      }
    }

    if (!data?.payload?.data?.like) {
      setLike(likes.filter((val) => val !== e))
    }
  }

  //handle video like
  const unlike = async (e) => {
    const data = await dispatch(dislikeVideo(e))

    // alert('folloe')
    if (data?.payload?.success) {
      console.log(data?.payload)
      if (data?.payload?.data?.dislike) {
        setDislike([...dislike, e])
      }
    }

    if (!data?.payload?.data?.dislike) {
      setDislike(dislike.filter((val) => val !== e))
    }
  }

  return (
    <div className={style.main_middle_wrapper}>
      <div className={`mobile-only ${style.mobile_player_controls}`}>
        <div onClick={() => like('id')}>
          {mobileIcons.like}
          <span>{0}</span>
        </div>

        {/* <div onClick={() => unlike(id)}>
                    {icon.dislike}
                    <span>4k</span>
                  </div> */}

        <div onClick={() => handleVideoOpen('chi')}>
          {mobileIcons.comment}
          <span>{0}</span>
        </div>

        <div>
          {mobileIcons.share}
          <span>0</span>
        </div>
        <div className={style.mobile_sound}>
          <Sound />
          {/* <figure>
            <Image src={album} alt="" width={500} height={500} />
          </figure> */}
          {/* <span>4k</span> */}
        </div>
      </div>
      <div className={style.post_container}>
        {posts?.map((chi, idx) => {
          const { User, id, description, _count, thumbNail, key } = chi

          const placeImage = env.cloudfront + thumbNail
          const video = env.cloudfront + key
          const vidFormat = key.split('.')[1]
          const lukplayer3 = document.querySelectorAll('video-js')
          const lukplayer2 = document.querySelectorAll('.vjs-poster')

          lukplayer2
            ? lukplayer2.forEach(
                (el) => (el.style.backgroundColor = 'transparent')
              )
            : ''
          lukplayer3
            ? lukplayer3.forEach(
                (el) => (el.style.backgroundColor = 'transparent')
              )
            : ''
          lukplayer3
            ? lukplayer3.forEach(
                (el) => (el.style.backgroundColor = 'transparent')
              )
            : ''
          // lukplayer3
          //   ? lukplayer3.forEach(
          //       (el) => (el.style.background = `url(${placeImage})`),
          //     )
          //   : ''

          // console.log(user, 'from user')

          return (
            <div key={idx} className={style.feed_wrapper}>
              <div className={style.feed}>
                <div className={` ${style.user_wrapper}`}>
                  <div className={` ${style.user}`}>
                    <figure>
                      {!User.profile.avatar ? (
                        <Skeleton circle width={50} height={50} />
                      ) : (
                        <Image
                          src={`${env.cloudfront}${User?.profile?.avatar}`}
                          alt=""
                          width="150"
                          height="150"
                        />
                      )}
                    </figure>
                    <div className={style.post_wrapper}>
                      <div className={style.user_info}>
                        <span>
                          {User?.username} <figure>{verifiedIcon}</figure>
                        </span>
                        {/* <span>{User?.username} <figure>{verifiedIcon}</figure></span> */}
                      </div>

                      <div className={style.post}>
                        {`${description.slice(0, 105)}... `}{' '}
                        <Link href="/">Load More</Link>
                      </div>
                    </div>
                  </div>
                  <div className="follow_btn">
                    <ButtonPrimary
                      action={() =>
                        !user ? handleAuthOpen() : follow(User?.username)
                      }
                      padding="1rem 2rem"
                    >
                      {
                        // !followLoading ? (
                        following.includes(User.username)
                          ? 'Following'
                          : User?.followedBy?.length > 0
                          ? 'Unfollow'
                          : 'Follow'
                        // ) : (
                        //   <div
                        //     // style={{ padding: "0.7rem" }}
                        //     className="load-wrap"
                        //   >
                        //     {/* <ThreeDots
                        //       height="15"
                        //       width="50"
                        //       radius="9"
                        //       color="#ffffff"
                        //       ariaLabel="three-dots-loading"
                        //       wrapperStyle={{}}
                        //       wrapperClassName=""
                        //       visible={true}
                        //     /> */}
                        //   </div>
                        // )
                      }
                    </ButtonPrimary>
                  </div>
                </div>
              </div>
              {/* Desktop and tablet player starts here */}
              <div className={`desktop-only ${style.feed_player_wrapper}`}>
                <div
                  style={{
                    backgroundImage: `url("${placeImage}")`,
                  }}
                  className={style.luk_player}
                >
                  <LukPlayer
                    width="720"
                    height="420"
                    ref={lukRef}
                    options={{
                      ...videoJsOptions,
                      poster: placeImage,

                      sources: [
                        {
                          src: video,
                          type: vidFormat === 'mp4' ? `video/mp4` : `video/mp4`,
                        },
                      ],
                    }}
                    onReady={handlePlayerReady}
                    className={style.luk_player}
                  />
                </div>
                <div className={style.player_controls}>
                  <div onClick={() => like(id)}>
                    {icon.like}
                    <span>{_count.video_likes}</span>
                  </div>

                  {/* <div onClick={() => unlike(id)}>
                    {icon.dislike}
                    <span>4k</span>
                  </div> */}

                  <div onClick={() => handleVideoOpen(chi)}>
                    {icon.comment}
                    <span>{_count.comments}</span>
                  </div>

                  <div>
                    {icon.share}
                    <span>0</span>
                  </div>
                  <div>
                    <figure>
                      <Image src={album} alt="" width={500} height={500} />
                    </figure>
                    {/* <span>4k</span> */}
                  </div>
                </div>
              </div>
              {/* Desktop and tablet player ends here */}

              {/* Mobile player starts here */}
              <div
                className={`mobile-only ${style.mobile_feed_player_wrapper}`}
              >
                <div
                  style={{
                    backgroundImage: `url("${placeImage}")`,
                  }}
                  className={style.luk_player}
                >
                  <LukPlayer
                    width="720"
                    height="420"
                    ref={lukRef}
                    data={chi}
                    options={{
                      ...videoJsOptions,
                      poster: placeImage,
                      sources: [
                        {
                          src: video,
                          type: vidFormat === 'mp4' ? `video/mp4` : `video/mp4`,
                        },
                      ],
                    }}
                    onReady={handlePlayerReady}
                    className={style.luk_player}
                  />
                </div>
              </div>
              {/* Mobile player ends here */}
            </div>
          )
        })}
      </div>
      <SingleVideo show={videoModal} onClose={handleVideoClose}></SingleVideo>
    </div>
  )
}

export default Middle
