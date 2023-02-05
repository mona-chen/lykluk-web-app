import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import style from './style.module.css'
import logo_icon from '../../../assets/images/logo_icon.png'
import { authIcons } from '../../../assets/icons/authIcons'
import { LukPlayer } from '../../video/LukPlayer'
import env from '../../../env'
import { videoIcons } from '../../../assets/icons/videoIcons'

function SingleVideo(props, { chi }) {
  const [show, setShow] = useState(false)
  const [stage, setStage] = useState('main')

  const { video, comments } = useSelector((state) => state.video)

  console.log(comments, 'commentsx')
  const closeHandler = () => {
    setShow(false)
    props.onClose(false)
    setStage('main')
  }

  // const handlePlayerReady = (player) => {
  //   playerRef.current = player

  //   // / You can handle player events here, for example:
  //   player.on('waiting', () => {
  //     videojs.log('player is waiting')
  //   })

  //   player.on('dispose', () => {
  //     videojs.log('player will dispose')
  //   })
  // }

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
  }

  // TODO: Remove this when we figure out how to handle multiple events

  useEffect(() => {
    setShow(props.show)
  }, [props.show])

  const { User, description, _count, thumbNail, key } = video

  const placeImage = env.cloudfront + thumbNail
  const videoFile = env.cloudfront + key
  const vidFormat = key?.split('.')[1]
  let avatar = env.cloudfront + User?.profile?.avatar

  return (
    <>
      <div
        style={{
          visibility: show ? 'visible' : 'hidden',
          opacity: show ? '1' : '0',
        }}
        className={style.overlay}
      >
        <div onClick={() => closeHandler()} className={style.close_div}>
          x
        </div>

        <div className={style.popup}>
          <div className={style.single_video_wrapper}>
            <div className={style.video_view_wrapper}>
              <div
                style={{
                  backgroundImage: `url("${placeImage}")`,
                }}
                className={style.luk_player}
              >
                <LukPlayer
                  width="720"
                  height="1000"
                  options={{
                    ...videoJsOptions,
                    poster: placeImage,
                    sources: [
                      {
                        src: videoFile,
                        type: vidFormat === 'mp4' ? `video/mp4` : `video/mp4`,
                      },
                    ],
                  }}
                  // onReady={handlePlayerReady}
                  className={style.luk_player}
                />
              </div>
            </div>
            <div className={style.comment_screen_wrapper}>
              <div className={style.main_comment}>
                <div className={style.author}>
                  <figure>
                    <Image src={avatar} alt="" width="70" height="70" />
                  </figure>
                  <div>
                    <h4>Sakshi moore</h4>
                    <small>{User?.username}</small>
                  </div>
                </div>
                <div className={style.video_description}>{description}</div>

                <div className={style.reactions}>
                  <figure>
                    {videoIcons.like}
                    <span>{_count?.video_likes}</span>
                  </figure>
                  <figure>
                    {videoIcons.dislike}
                    <span>{_count?.video_dislikes}</span>
                  </figure>
                  <figure>
                    {videoIcons.comment}
                    <span>{_count?.comments}</span>
                  </figure>
                </div>

                <div className={style.original_sound}>
                  <figure>{videoIcons.score}</figure>
                  <span>
                    Original Sound -{' '}
                    {User?.username.slice(1, User.username.length)}
                  </span>
                </div>
              </div>
              <div className={style.comments_wrapper}>
                <figure>
                  <Image src={avatar} alt="" width="70" height="70" />
                </figure>
                <div className={style.comment}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleVideo
