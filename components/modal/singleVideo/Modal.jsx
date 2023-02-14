import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import style from './style.module.css'
import logo_icon from '../../../assets/images/logo_icon.png'
import { authIcons } from '../../../assets/icons/authIcons'
import { LukPlayer } from '../../video/LukPlayer'
import env from '../../../env'
import { videoIcons } from '../../../assets/icons/videoIcons'
import { getVideoComments } from '../../../redux/video'

function SingleVideo(props, { chi }) {
  const [show, setShow] = useState(false)
  const [stage, setStage] = useState('main')

  const { video, comments } = useSelector((state) => state.video)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVideoComments(video.id))
  }, [])

  // console.log(comments, 'commentsx')
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

  function keyPress(e) {
    document.onkeydown = function (evt) {
      evt = evt || window.event
      var isEscape = false
      if ('key' in evt) {
        isEscape = evt.key === 'Escape' || evt.key === 'Esc'
      } else {
        isEscape = evt.keyCode === 27
      }
      if (isEscape) {
        closeHandler()
      }
    }
  }

  return (
    <>
      <div
        onKeyUp={(e) => keyPress(e)}
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
                <div className={style.count_comment}>
                  <span>Comments</span>
                  <span>({comments?.length})</span>
                </div>
                {comments?.map((chi, idx) => {
                  const {
                    comment,
                    id,
                    videoId,
                    createdAt,
                    comment_likes,
                    User,
                    replyFrom,
                    _count,
                  } = chi
                  return (
                    <div className={style.comment_container} key={idx}>
                      <figure>
                        <Image src={avatar} alt="" width="50" height="50" />
                      </figure>

                      <div className={style.comment}>
                        <span>
                          <h3>{User?.username}</h3>
                          <h3>&#x2022; 7 minutes ago</h3>
                        </span>

                        <small>{comment}</small>

                        <div className={style.comment_controls}>
                          <span>Reply</span>
                          <span>(4) Reply</span>
                          <figure>{videoIcons.like_comment}</figure>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleVideo
