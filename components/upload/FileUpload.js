/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react'
import stile from './fileUpload.module.css'
import { LukPlayer } from '../video/LukPlayer'
import { createFFmpeg, fetchfile } from '@ffmpeg/ffmpeg'
import { generateVideoThumbnails } from '../../helper/generatVideoCover'
import Image from 'next/image'
import { videoIcons } from '../../assets/icons/videoIcons'

const ffmpeg = createFFmpeg({
  log: true,
  mainName: 'main',
  corePath: 'https://unpkg.com/@ffmpeg/core-st@0.11.1/dist/ffmpeg-core.js',
})

export default function FileUpload(props, { onFinish }) {
  const [value, setValue] = useState()
  const [path, setPath] = useState({})
  const [preview, setPreview] = useState('')
  const [thumbnail, setThumbnail] = useState([])
  const [thumb, setThumb] = useState([])
  const [thumbObj, setThumbObj] = useState([])
  const [editorReady, setReady] = React.useState(false)

  // handle drag n drop file upload
  function dropHandler(ev) {
    // console.log("File(s) dropped");

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault()

    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      ;[...ev.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === 'file') {
          const file = item.getAsFile()
          setPath(file), setValue(file.name)

          console.log(`… file[${i}].name = ${file.name}`)
        }
      })
    } else {
      // Use DataTransfer interface to access the file(s)
      ;[...ev.dataTransfer.files].forEach((file, i) => {
        console.log(`… file[${i}].name = ${file.name}`)
      })
    }
  }

  function dragOverHandler(ev) {
    console.log('File(s) in drop zone')

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault()
  }

  const fileIcon = (
    <svg
      width="57"
      height="58"
      viewBox="0 0 57 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_598_4189)">
        <path
          d="M36.4195 40.5548C36.4195 40.5548 45.8212 40.5548 46.7102 40.5548C51.6475 40.5548 55.6482 36.5542 55.6482 31.618C55.6482 26.6819 51.6475 22.6801 46.7102 22.6801C46.6876 22.6801 46.6672 22.6835 46.6446 22.6835C46.7136 22.1247 46.7611 21.5592 46.7611 20.9823C46.7611 13.3927 40.6091 7.2395 33.0183 7.2395C27.1038 7.2395 22.0783 10.9823 20.1396 16.2215C18.9101 14.9898 17.2089 14.2263 15.3313 14.2263C11.5772 14.2263 8.53455 17.2689 8.53455 21.0219C8.53455 21.1181 8.54586 21.2108 8.54925 21.3058C4.40378 22.4516 1.35547 26.2397 1.35547 30.7494C1.35547 36.1651 5.74526 40.5548 11.1621 40.5548C12.0975 40.5548 20.5841 40.5548 20.5841 40.5548"
          stroke="#C9C9C9"
          strokeWidth="2.2622"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.8438 32.6372L28.4992 26.9817L34.1547 32.6372"
          stroke="#C9C9C9"
          strokeWidth="2.2622"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M28.5 49.6037V27.3584"
          stroke="#C9C9C9"
          strokeWidth="2.2622"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_598_4189">
          <rect
            width="56.5549"
            height="56.5549"
            fill="white"
            transform="translate(0.222656 0.966553)"
          />
        </clipPath>
      </defs>
    </svg>
  )

  // convert file size to readable format
  const fileSize = (size) => {
    var i = size == 0 ? 0 : Math.floor(Math.log(size) / Math.log(1024))
    return (
      (size / Math.pow(1024, i)).toFixed(2) * 1 +
      ' ' +
      ['B', 'kB', 'MB', 'GB', 'TB'][i]
    )
  }

  useEffect(() => {
    // create the preview
    if (path) {
      // const objectUrl = URL.createObjectURL(path)
      var binaryData = []
      binaryData.push(path)
      const objectUrl = window.URL.createObjectURL(
        new Blob(binaryData, { type: 'video/mp4' })
      )

      setPreview(objectUrl)
      // getCover()
      return () => URL.revokeObjectURL(objectUrl)
    }
    // free memory when ever this component is unmounted
  }, [path])

  function uriToBlob(src, fileName, mimeType) {
    return fetch(src)
      .then(function (res) {
        return res.arrayBuffer()
      })
      .then(function (buf) {
        return new File([buf], fileName, { type: mimeType })
      })
  }

  async function processThumbnail() {
    let data = await uriToBlob(thumbnail[0], 'thumbnail', 'png')
    setThumbObj(data)
  }

  props?.value && props?.value(value)
  props?.preview && props?.preview(preview)
  props.thumbnail && props?.thumbnail(thumbnail)
  props.thumb && props?.thumb(thumbObj)

  let width = props.width
  let label = props.label
  let dragdrop = props.dragdrop

  // console.log(path, 'this path')
  const lukplayerOptions = {
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

  const load = async () => {
    if (!ffmpeg.isLoaded()) {
      await ffmpeg.load()
      setReady(true)
    }
  }

  //initialize ffmpeg instance
  useEffect(() => {
    load()
  }, [])

  const genThumbs = (file, num) => {
    generateVideoThumbnails(file, num)
      .then((thumbnailArray) => {
        // output will be arry of base64 Images
        // example - ["img1", "imgN"]
        // @todo - implement your logic here
        setThumbnail(thumbnailArray)
        // console.log(thumbnailArray)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  useEffect(() => {
    Array.of(thumbnail).map((chi, idx) => setThumb(chi[0]))
  }, [thumbnail])

  onFinish
    ? onFinish(() => {
        setPreview()
        setPath()
        setValue()
      })
    : ''

  return (
    <>
      {!dragdrop && (
        <div style={{ width: width ? width : null }} className={stile.upload}>
          <div className={stile.uploadBtn}>
            <label htmlFor="docs">
              <div htmlFor="docs" className={stile.title}>
                {label}
              </div>
            </label>
            <label htmlFor="docs">Select file to upload</label>
            <input
              onChange={(e) => {
                setPath(e.target.files[0]), setValue(e.target.files)
              }}
              type="file"
              name="docs"
              id="docs"
              hidden
            />
          </div>

          {value &&
            Array.from(value).map(function (item, i) {
              return (
                <div key={i} className={stile.fileUpload}>
                  <div className={stile.fileOutput}>
                    <div>{/* <FileIcon /> */}</div>
                    {item.name}
                  </div>
                  <div
                    onClick={() => {
                      setPreview()
                      setValue()
                    }}
                  >
                    {/* <CancelRound /> */}
                  </div>
                </div>
              )
            })}
        </div>
      )}
      {dragdrop && !value && (
        <>
          <div
            id={stile.drop_zone}
            onDrop={(e) => dropHandler(e)}
            onDragOver={(event) => dragOverHandler(event)}
            style={{ width: width ? width : null }}
            className={stile.upload}
          >
            <div id={stile.uploadBtn}>
              <label htmlFor="docs">
                <div>{fileIcon}</div>
              </label>
              <label htmlFor="docs">
                Or drag and drop a file(MP4 or WebM)
                <br />
                Up to 5 minutes, Less than 5GB
                <br />
                720x1280 Resolution or higher
                <br />
              </label>
              <input
                onChange={(e) => {
                  setPath(e.target.files[0])
                  setValue(e.target.files)
                  processThumbnail()
                  genThumbs(e.target.files[0], 1)
                }}
                type="file"
                name="docs"
                id="docs"
                hidden
              />
            </div>
          </div>
          {value &&
            Array.from(value).map(function (item, i) {
              return (
                <div key={i} id={stile.filePreview}>
                  <div id={stile.fileOutput}>
                    <div id={stile.previewImage}>
                      <img src={preview} alt="" />
                    </div>
                    <p>
                      {item.name}
                      <small>{fileSize(path.size)}</small>
                    </p>
                  </div>
                  <div
                    id={stile.deleteBtn}
                    onClick={() => {
                      setPreview()
                      setPath()
                      setValue()
                    }}
                  >
                    <span>Delete</span>
                  </div>
                </div>
              )
            })}
        </>
      )}

      {dragdrop && value && (
        <div
          className={stile.luk_player}
          style={{
            backgroundImage: `url("${thumb}")`,
            borderRadius: '0.8rem',
          }}
          // className={'luk_player'}
        >
          <LukPlayer
            // width="100%"
            // height="1000"
            options={{
              ...lukplayerOptions,
              poster: thumb,
              sources: [
                {
                  src: preview,
                  type: `video/mp4`,
                },
              ],
            }}
            // onReady={handlePlayerReady}
          />
          {value && (
            <div
              id={stile.deleteBtn}
              onClick={() => {
                setPreview()
                setPath()
                setValue()
              }}
            >
              <figure>{videoIcons.cancel}</figure>
            </div>
          )}
        </div>
      )}
    </>
  )
}
