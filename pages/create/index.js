import React from 'react'
import Create from '../../components/create/Create'
import Header from '../../components/header/Header'
import LeftSide from '../../components/home/leftSide/LeftSide'

function CreatePost() {
  return (
    <div className="window_wrapper">
      <Header />
      <div className="main_home_wrapper">
        <LeftSide />
        <Create />
      </div>
    </div>
  )
}

export default CreatePost
