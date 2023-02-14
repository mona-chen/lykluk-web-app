import React from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import style from './style.module.css'

export const LukPlayer = (props) => {
  const videoRef = React.useRef(null)
  const playerRef = React.useRef(null)
  const observerRef = React.useRef(null)
  const { options, onReady } = props

  // // Add event listener for spacebar key press
  React.useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        event.preventDefault()
        const player = playerRef.current
        if (player) {
          if (player?.paused()) {
            player?.play()
          } else {
            player?.pause()
          }
        }
      }
    }

    // document.addEventListener('keydown', handleKeyPress)
    // check if the video element is in view
    const checkIfVideoInView = (entries) => {
      entries?.forEach((entry) => {
        if (entry.isIntersecting) {
          // if the video is in view, attach keydown event listener to play/pause
          document.addEventListener('keydown', handleKeyPress)
        } else {
          // if the video is not in view, remove keydown event listener
          document.removeEventListener('keydown', handleKeyPress)
        }
      })
    }
    checkIfVideoInView()

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
      observerRef.current.disconnect()
    }
  }, [options, videoRef])

  React.useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement('video-js')

      videoElement.classList.add('vjs-big-play-centered')
      videoRef.current.appendChild(videoElement)

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log('player is ready')
        onReady && onReady(player)
      }))

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      const player = playerRef.current

      player.autoplay(options.autoplay)
      player.src(options.sources)
    }

    // create an observer and observe the element
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        playerRef.current.pause()

        if (entry.isIntersecting && entry.intersectionRatio > 0) {
          // console.log(entry.intersectionRect.height, 'intersection ratio')

          // alert('int')
          // play video if it's in view
          // playerRef.current.play()
          playerRef.current.tech_?.off('dblclick')
        } else {
          // pause video if it's not in view
          playerRef.current.pause()
        }
      }),
        { threshold: [1] }
    })
    observerRef.current.observe(videoRef.current)

    return () => {
      observerRef.current.disconnect()
    }
  }, [options, videoRef])

  //pause video when a user swipes up or down

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose()
        playerRef.current = null
      }
    }
  }, [playerRef])

  return (
    <div data-vjs-player>
      <div className={style.luk_player_wrapper} ref={videoRef} />
    </div>
  )
}

export default LukPlayer
