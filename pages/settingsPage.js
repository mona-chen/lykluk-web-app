/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
import Header from '../components/header/Header'
import LeftSide from '../components/settings/leftSide/leftSide'
import RightSide from '../components/settings/right/rightSide'

const ProfilePage = () => {
  return (
    <>
      <div className="window_wrapper">
        <Header />
        <div className="settings_main_wrapper">
          <div className="left_section">
            <LeftSide></LeftSide>
          </div>

          <div className="right_section">
            <RightSide></RightSide>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfilePage
