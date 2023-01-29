import React from 'react'
import style from '../style.module.css'
import { authIcons } from '../../../../assets/icons/authIcons';
import { useState } from 'react';
import { ButtonPrimary } from '../../../buttons/ButtonReuse';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import Flatpickr from "react-flatpickr";

function EmailPhoneSignup() {
  const [tab, setTab] = useState('phone')
  const [visible, setVisible] = useState(true);
  const [dob, setDob] = useState('')
  const [phone, setPhone] = useState('')
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
              <input type="text" />
            </span>
          </div>
        
          <div className={style.input_contain}>
            <label for="email">What's your birthday?</label>
            <span>
              <input type="date" />
            {/* <Flatpicker
                              options={{ enableTime: true }}
                              id="input-calendar"
                              name="from"
                              className={`input-calendar`}
                              autoComplete="off"
                              value={fromDate}
                              onChange={(date) =>
                                setFromDate(
                                  moment(date[0]).format("YYYY-MM-DD HH:mm:ss")
                                )
                              }
                              placeholder="DD / MM / YYYY"
                            /> */}
      
            </span>
          </div>

          {tab !== 'phone' ? 
        <div className={style.email_input_contain}>
            <label for="email">Email</label>
            <span>
              <figure>{authIcons.email_icon}</figure>
              <input type="text" />
            </span>
          </div> : 
          <div className={style.phone_input_contain}>
          <label for="email">Phone</label>
          <PhoneInput
          className={style.phone_input}
          initialCountry="ng"
          value={phone}
          onChange={(phone) => setPhone(phone)}
        />
        </div>
          
        }

          <div className={style.password_input_contain}>
            <label for="email">Password</label>
            <span>
              <figure onClick={() => setVisible(!visible)}>{visible ? authIcons.eye_opened : authIcons.eye_closed}</figure>
              <input type={visible ? 'text' : 'password'} />
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
            width="100%"
            >
              Login
            </ButtonPrimary>
          </div>
        </div>
    </div>
  )
}

export default EmailPhoneSignup