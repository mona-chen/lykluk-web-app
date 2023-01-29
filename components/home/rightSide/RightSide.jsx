import Image from 'next/image'
import React from 'react'
import style from './style.module.css'
import { homeIcons } from '../../../assets/icons/homeIcons'
const RightSide = () => {
  return (
    <div className={style.main_rightside_wrapper}>
      <div className={style.discover_banner_wrapper}>
        <div className={style.banner_contents}>
          <h3>Discover trending videos around you</h3>
          <span>
            Be a video star! Create and share awesome videos to the community!
          </span>
        </div>
      </div>

      <div className={style.quick_actions_wrapper}>
        <div>
          {homeIcons.best}
          <span>Best</span>
        </div>

        <div>
          {homeIcons.funny}
          <span>Funny</span>
        </div>

        <div>
          {homeIcons.trending}
          <span>Trending</span>
        </div>

        <div>
          {homeIcons.science}
          <span>Science</span>
        </div>

        <div>
          {homeIcons.covid}
          <span>Covid</span>
        </div>
      </div>

      <div className={style.popular_users}>
        <div className={style.quick_popular_stats}>
          <h3>#Popular</h3>
          <span>1.8m</span>
        </div>

        <div className={style.user_autoscroll}>
          <div
            style={{
              backgroundImage:
                'url(https://divineflaver.com/wp-content/uploads/2022/01/1428.jpg)',
            }}
            className={style.popular_content_thumbnail}
          >
            <div>
              <span className={style.user}>
                <Image
                  src="https://divineflaver.com/wp-content/uploads/2022/01/1428.jpg"
                  alt=""
                  width="100"
                  height="100"
                />
                <span>Davido 30BG</span>
              </span>
            </div>
          </div>

          <div
            style={{
              backgroundImage:
                'url(https://divineflaver.com/wp-content/uploads/2022/01/1428.jpg)',
            }}
            className={style.popular_content_thumbnail}
          >
            <div>
              <span className={style.user}>
                <Image
                  src="https://divineflaver.com/wp-content/uploads/2022/01/1428.jpg"
                  alt=""
                  width="100"
                  height="100"
                />
                <span>Davido 30BG</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={style.popular_users}>
        <div className={style.quick_popular_stats}>
          <h3>#Trending</h3>
          <span>1.8m</span>
        </div>

        <div className={style.user_autoscroll}>
          <div
            style={{
              backgroundImage:
                'url(https://divineflaver.com/wp-content/uploads/2022/01/1428.jpg)',
            }}
            className={style.popular_content_thumbnail}
          >
            <div>
              <span className={style.user}>
                <Image
                  src="https://divineflaver.com/wp-content/uploads/2022/01/1428.jpg"
                  alt=""
                  width="100"
                  height="100"
                />
                <span>Davido 30BG</span>
              </span>
            </div>
          </div>

          <div
            style={{
              backgroundImage:
                'url(https://divineflaver.com/wp-content/uploads/2022/01/1428.jpg)',
            }}
            className={style.popular_content_thumbnail}
          >
            <div>
              <span className={style.user}>
                <Image
                  src="https://divineflaver.com/wp-content/uploads/2022/01/1428.jpg"
                  alt=""
                  width="100"
                  height="100"
                />
                <span>Davido 30BG</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSide
