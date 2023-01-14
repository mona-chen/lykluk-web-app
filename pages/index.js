import Header from "../components/header/Header";
import LeftSide from '../components/home/leftSide/LeftSide';
import Middle from "../components/home/middle/Middle";

export default function Home() {
  return (
    <div className="window_wrapper">
      <Header />
    <div className="main_home_wrapper">
      <LeftSide />
      <Middle />

    </div>
    </div>
  )
}
