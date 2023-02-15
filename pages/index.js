import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/header/Header'
import LeftSide from '../components/home/leftSide/LeftSide'
import Middle from '../components/home/middle/Middle'
import { getFyp, getHashtags } from '../redux/home'
import { store } from '../redux/store'
import RightSide from '../components/home/rightSide/RightSide'
import { getTrendingVideos } from '../redux/video'
import SnackMenu from '../components/mobile/snackbars/SnackMenu'

export default function Home() {
  const dispatch = useDispatch()

  const fetchFyp = async (e) => {
    const data = await dispatch(getFyp())
    if (data?.payload?.success) {
      // return data
    }
  }

  // fetch posts on page load
  useEffect(() => {
    fetchFyp()
    dispatch(getHashtags())
    dispatch(getTrendingVideos())
  }, [])

  // retrieve posts from redux
  const { fyp, trendingHashtags } = useSelector((state) => state.home)
  const { trendingVideos } = useSelector((state) => state.video)
  const { user } = useSelector((state) => state.user)

  // console.log(trendingHashtags, 'this 1  FROM ')
  return (
    <div className="window_wrapper">
      <Header />
      <div className="main_home_wrapper">
        <LeftSide hashtags={trendingHashtags} trending={trendingVideos} />
        <Middle user={user} posts={fyp?.data} />
        <RightSide trending={trendingVideos} />
        <SnackMenu />
      </div>
    </div>
  )
}
