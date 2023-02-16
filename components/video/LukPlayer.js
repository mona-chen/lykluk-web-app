import React from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import style from './style.module.css'

export const LukPlayer = (props) => {
  const videoRef = React.useRef(null)
  const playerRef = React.useRef(null)
  const observerRef = React.useRef(null)
  const { options, onReady, data } = props

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
      player.state = data
    }

    // create an observer and observe the element
    const videoNode = videoRef.current

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    }
    const player = playerRef.current

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          player.play()
        } else {
          player.pause()
        }
      })
    }, observerOptions)
    observerRef.current.observe(videoNode)

    return () => {
      observerRef.current.disconnect()
    }
  }, [options, videoRef])

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose()
        playerRef.current = null
      }
      if (observerRef.current) {
        observerRef.current.disconnect()
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
