import style from "./style.module.css"
import Image from "next/image";
const Profile = () => {
    return ( 
        <div className={style.main_profile_wrapper}>
          <div className={style.top_section}>
            <div className={style.first_div}>
                <p>Jacob west</p>
                <Image src="/edit_profile.svg" height={20} width={20}></Image>
            </div>
            <div className={style.profile_pic_div}>
            <Image src="/profile_pic.svg" height={90} width={100}></Image>  
            </div>
            <p className={style.profile_username}>
                @najib2557
            </p>
            <div className={style.bio_div}>
                <h4 className={style.header}>
                    Bio:
                </h4>
                <p>
                I am Video Editor and i am doing 
                this for 3 years long thanks for 
                viewing my  profile.
                </p>
            </div>
            <div className={style.profile_stats_div}>
                <div className={style.section}>
                    <p className={style.number}>2.9k</p>
                    <p className={style.text}>following</p>
                </div>
                <div className={style.section}>
                    <p className={style.number}>26.9k</p>
                    <p className={style.text}>followers</p>
                </div>
                <div className={style.section}>
                    <p className={style.number}>1.4k</p>
                    <p className={style.text}>post</p>
                </div>
               
            </div>
          </div>
          <div className={style.post_switch_div}>
            <div className={style.posts}>
                <div  className={style.icon}>
                    <Image src="/tabs_Icon.svg" width={25} height={23}/>
                </div>
            </div>
    
            <div className={style.hidden}>
                <div  className={style.icon}>
                    <Image src="/heart_hide.svg" width={25} height={23}/>
                </div>
            </div>
          </div>
          <div className={style.posts_div}>
            <div className={style.video}>
                <Image src="/video_post.png" height={270} width={190}/>
            </div>
            <div className={style.video}>
                <Image src="/video_post.png" height={270} width={190}/>
            </div>
            <div className={style.video}>
                <Image src="/video_post.png" height={270} width={190}/>
            </div>
          </div>
        </div>
     );
}
 
export default Profile;