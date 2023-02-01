import React from 'react'
import style from '../style.module.css'
import { authIcons } from '../../../../assets/icons/authIcons';
import { useState } from 'react';
import { ButtonPrimary } from '../../../buttons/ButtonReuse';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import Flatpickr from "react-flatpickr";
import { signup } from '../../../../redux/user';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import 'react-day-picker/dist/style.css';
import {ThreeDots} from 'react-loader-spinner'


function EmailPhoneSignup({onFinish}) {
  const [tab, setTab] = useState('phone')
  const [visible, setVisible] = useState(true);
  const [dob, setDob] = React.useState(Date.now());

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    dob: '',
    phone: '',
    terms: 1
  })

  const handleFieldChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const { loading } = useSelector((state) => state.user)

  const dispatch = useDispatch()

  const signupUser = async (e) => {
    let payload = {
     ...formData,
     app_token: String(Math.random()),
    }
     const data = await dispatch(signup(payload))
     if (data?.payload?.sucess) {
       onFinish()
     }
   }

  return (
    <div className={style.email_phone_auth_wrapper}>
        <div className={style.auth_option_tab}>
          <div onClick={() => setTab('phone')} className={`${style.option} ${tab === 'phone' ? style.active : ''}`}>
              Phone Number
          </div>
          <div onClick={() => setTab('email')} className={`${style.option} ${tab === 'email' ? style.active : ''}`}>
              Email
          </div>
        </div>
        <div className={style.auth_tab_body_wrapper}>
        <div className={style.input_contain}>
            <label for="email">What's your name?</label>
            <span>
              <input
              name='name' 
              value={formData.name}
              onChange={handleFieldChange}
              type="text" />
            </span>
          </div>
        
          <div className={style.input_contain}>
            <label for="email">What's your birthday?</label>
            <span>
              <input type="date" 
              name='dob'
              value={formData.dob}
              onChange={(date) =>
                setFormData({
                  ...formData,
                  dob: date.target.value
                }
                )
              }
              placeholder="DD / MM / YYYY"
              />
               
           {/* <Flatpickr
                            
          placeholder="DD / MM / YYYY"
        /> 
       */}
            </span>
          </div>

          {tab !== 'phone' ? 
        <div className={style.email_input_contain}>
            <label for="email">Email</label>
            <span>
              <figure>{authIcons.email_icon}</figure>
              <input 
              type="text"
              name='email'
              value={formData.email}
              onChange={handleFieldChange}
               />
            </span>
          </div> : 
          <div className={style.phone_input_contain}>
          <label for="phone">Phone</label>
          <PhoneInput
          className={style.phone_input}
          initialCountry="ng"
          value={formData.phone}
          onChange={(phone) => setFormData({
            ...formData,
            phone: phone,
          })}
        />
        </div>
          
        }

          <div className={style.password_input_contain}>
            <label for="email">Password</label>
            <span>
              <figure onClick={() => setVisible(!visible)}>{visible ? authIcons.eye_opened : authIcons.eye_closed}</figure>
              <input 
              name="password"
              onChange={handleFieldChange}
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

          <div className={style.actBtn2}>
            <ButtonPrimary
            // btnStyle={style.actBtn}
            action={() => signupUser()}
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
          'Sign Up'}
            </ButtonPrimary>
          </div>
        </div>
    </div>
  )
}

export default EmailPhoneSignup