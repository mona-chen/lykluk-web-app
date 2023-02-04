import React from 'react'
import LeftSide from '../../components/home/leftSide/LeftSide';
import Header from '../../components/header/Header';
import ProfileComponent from '../../components/profile/Profile';

function Profile() {
  return (
    <div className="window_wrapper">
    <Header/>
    <div className="main_home_wrapper">
      <LeftSide />
      <ProfileComponent />
    </div>
  </div>
  )
}

export default Profile