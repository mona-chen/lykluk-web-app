import React from 'react'
import style from '../style.module.css'
import { authIcons } from '../../../../assets/icons/authIcons';
import { useState } from 'react';
import { ButtonPrimary } from '../../../buttons/ButtonReuse';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { login } from '../../../../redux/user';
import { useDispatch, useSelector } from 'react-redux';
import {ThreeDots} from 'react-loader-spinner'

function EmailPhoneLogin({onFinish}) {
  const [tab, setTab] = useState('phone')
  const [visible, setVisible] = useState(true);
  const [phone, setPhone] = useState('')
  
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const { loading } = useSelector((state) => state.user)

  const dispatch = useDispatch();

  const loginUser = async (e) => {
   let payload = {
    ...formData,
    app_token: String(Math.random()),
   }
  //  setPop(false);
    const data = await dispatch(login(payload))
    console.log(data, 'fini')
    if (data.payload?.success) {
      onFinish();
      window.location.reload(false);
    }
  }
  return (
    <div className={style.email_phone_auth_wrapper}>
        <div className={style.auth_option_tab}>
          <div onClick={() => setTab('phone')} className={`${style.option} ${tab === 'phone' ? style.active : ''}`}>
              Phone
          </div>
          <div onClick={() => setTab('email')} className={`${style.option} ${tab === 'email' ? style.active : ''}`}>
              Email
          </div>
        </div>
        <div className={style.auth_tab_body_wrapper}>
          {tab !== 'phone' ? 
        <div className={style.email_input_contain}>
            <label for="email">Email</label>
            <span>
              <figure>{authIcons.email_icon}</figure>
              <input
              value = {formData.username}
              onChange={(e) => setFormData({
                ...formData,
                username: e.target.value,
              })} 
              type="text" 
              />
            </span>
          </div> : 
          <div className={style.phone_input_contain}>
          <label for="email">Phone</label>
          <PhoneInput
          className={style.phone_input}
          initialCountry="ng"
          value = {formData.username}
          onChange={(e) => setFormData({
            ...formData,
            username: e
          })}
        />
        </div>
          
        }

          <div className={style.password_input_contain}>
            <label for="email">Password</label>
            <span>
              <figure onClick={() => setVisible(!visible)}>{visible ? authIcons.eye_opened : authIcons.eye_closed}</figure>
              <input
              value = {formData.password}
              onChange={(e) => setFormData({
                ...formData,
                password: e.target.value,
              })}
              type={visible ? 'text' : 'password'} 
              />
            </span>
          </div>

          <div className={style.forgot_wrapper}>
            <div className={style.remember_me}>
              <input value="" type="checkbox"/>
              <span>Remember me</span>
            </div>
            <div className={style.forgot_pwd}>
              Forgot Password
            </div>
          </div>

          <div className={style.actBtn}>
            <ButtonPrimary
            // btnStyle={style.actBtn}
            action={() => loginUser()}
            width="100%"
            >
            {loading ? (
            <div style={{ margin: "0rem auto" }}>
              <ThreeDots
                height="14"
                width="110"
                radius="9"
                color="white"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            </div>
          ) : 
          'Login'
          }
            </ButtonPrimary>
          </div>
        </div>
    </div>
  )
}

export default EmailPhoneLogin