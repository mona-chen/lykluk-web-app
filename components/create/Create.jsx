import React from 'react'
import style from './style.module.css'
import FileUpload from '../upload/FileUpload'
import { ButtonPrimary } from '../buttons/ButtonReuse'
import { ThreeDots } from 'react-loader-spinner'
import { useSelector } from 'react-redux'
import { uploadVideo } from '../../redux/video'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Image from 'next/image'

function Create() {
  const [file, setFile] = React.useState()
  const [thumbnail, setThumbnail] = React.useState([{}])
  const [thumb, setThumb] = React.useState([{}])

  const [form, setForm] = React.useState({
    comment_privacy: 0,
    description: '',
    privacy: 0,
    allow_share: true,
    allow_comment: true,
  })

  const { loading } = useSelector((state) => state.video)
  const dispatch = useDispatch()

  const handleUpload = () => {
    const formData = new FormData()
    formData.append('video', file[0])
    formData.append('comment_privacy', form.comment_privacy)
    formData.append('privacy', form.comment_privacy)
    formData.append('description', form.description)
    formData.append('allow_share', form.allow_share)
    formData.append('allow_comment', form.allow_comment)
    formData.append('thumbnail', thumb)
    // formData.append('video', form.video)

    const payload = {
      ...form,
      video: file[0],
      thumbnail: thumb,
    }
    console.log(payload, 'the formData')

    dispatch(uploadVideo(formData))
  }

  return (
    <div className={style.create_wrapper}>
      <div className={style.create_header}>
        <h3>Upload Video</h3>
        <span>Make a post for your account</span>
      </div>
      <div className={style.create_post_wrapper}>
        <div className={style.uploader}>
          <FileUpload
            dragdrop
            thumb={(data) => {
              setThumb(data)
            }}
            thumbnail={(data) => {
              setThumbnail(data)
            }}
            // preview={(data) => setFile(data)}
            value={(data) => setFile(data)}
          />
        </div>
        <div className={style.video_options}>
          <div className={style.input_contain}>
            Caption
            <input
              value={form.description}
              type="text"
              onChange={(e) =>
                setForm({
                  ...form,
                  description: e.target.value,
                })
              }
            />
          </div>
          <div className={style.cover_wrapper}>
            Cover
            <div className={style.cover_display}>
              {Array.of(thumbnail).map((chi, idx) => {
                // console.log('thumbnailon', chi[0])
                return (
                  <figure
                    style={{
                      backgroundImage: `url("${chi[0]}")`,
                    }}
                    key={idx}
                  ></figure>
                )
              })}
            </div>
          </div>
          <div className={style.check_options}>
            <span>
              <input
                type="checkbox"
                onChange={() =>
                  setForm({
                    ...form,
                    comment_privacy: form.comment_privacy === 0 ? 1 : 0,
                  })
                }
              />
              Allow user to comment
            </span>
            <span>
              <input type="checkbox" />
              Allow Duets
            </span>
            <span>
              <input type="checkbox" />
              Allow users to dislike
            </span>
          </div>

          <div className={style.actBtn_contain}>
            <ButtonPrimary action={handleUpload}>
              {!loading ? (
                'Post'
              ) : (
                <div
                  // style={{ padding: "0.7rem" }}
                  className="load-wrap"
                >
                  <ThreeDots
                    height="15"
                    width="50"
                    radius="9"
                    color="#ffffff"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                  />
                </div>
              )}
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create
