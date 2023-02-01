/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useRef, useState } from "react";
import popStyles from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import logo_icon from "../../../assets/images/logo_icon.png"
import Image from "next/image";
import { authIcons } from '../../../assets/icons/authIcons';
import EmailPhoneLogin from './component/EmailPhoneLogin';
import EmailPhoneSignup from './component/EmailPhoneSignup';
function AuthModal(props) {
  const [show, setShow] = useState(false);
  const [stage, setStage] = useState('main');


  const closeHandler = () => {
    setShow(false);
    props.onClose(false);
    setStage('main')
  };



  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

 
  return (
    <>
      <div
        style={{
          visibility: show ? "visible" : "hidden",
          opacity: show ? "1" : "0",
        }}
        className={popStyles.overlay}
      >
        <div onClick={() => closeHandler()} className={popStyles.close_div}>
          x
        </div>

        <div className={popStyles.popup}> 
        <div className={popStyles.auth_header_wrapper}>
            
            <div onClick={() => setStage('main')}>{ stage === 'main' ? '' : authIcons.back}</div>
            <figure>
            <Image src={logo_icon} alt="" width="250" />
            </figure>
            <div onClick={closeHandler} className={popStyles.cancel_btn}>{authIcons.cancel_modal}</div>
          </div>
          {stage === 'main' &&
           <>
          <div className={popStyles.login_actions_wrapper}>
            <div>Login to <span className={popStyles.gradient}>LYKLUK</span></div>
            <div onClick={() => setStage('email-login')} className={popStyles.login_act}>
            <figure>{authIcons.email_auth}</figure>
            <span>Use email/username</span>
            </div>
            <div className={popStyles.login_act}>
            <figure>{authIcons.facebook_auth}</figure>
            <span>Continue with Facebook</span>
            </div>
            <div className={popStyles.login_act}>
            <figure>{authIcons.google_auth}</figure>
            <span>Continue with Google</span>
            </div>
            <div className={popStyles.login_act}>
            <figure>{authIcons.twitter_auth}</figure>
            <span>Continue with Twitter</span>
            </div>
          </div>

          </>
}
        
        

        {stage === 'email-login' && 
        <>
        <EmailPhoneLogin
        onFinish={() => closeHandler()}
        />
        </>
        }

      {stage === 'email-signup' && 
        <>
        <EmailPhoneSignup
        onFinish={() => closeHandler()}
        />
        </>
        }

            {stage !== 'email-signup' &&
           <div className={popStyles.auth_box_footer}>
              <span>Already have an account? <b onClick={() => setStage('email-signup')}>Sign Up</b></span>
          </div>
          }
        </div>
      </div>
    </>
  );
}

export default AuthModal;
