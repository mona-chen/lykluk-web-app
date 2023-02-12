
import Header from "../components/header/Header";
import LeftSide from "../components/home/leftSide/LeftSide";
import Profile from "../components/profile/profile";
const ProfilePage = () => {
    return ( 
        <>
        <div className="window_wrapper">
      <Header />
      <div className="main_home_wrapper">
        <LeftSide />
        <Profile />
      </div>
    </div>
        </>
     );
}
 
export default ProfilePage;




















