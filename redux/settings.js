import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import instance from '../utils/axios'
import { toast } from 'react-hot-toast'
import { setting_options } from '../utils/settings'

const initialState = {
  selected_setting: setting_options.AccountManagment,
  loading: false,
  isOtpSent: false,
  isPasswordReset: false,
  isProfileEdited: false,
}
export const setAccountPrivacy = createAsyncThunk(
  'settings/setAccountPrivacy',
  async (payload) => {
    try {
      const { data } = await instance.profile.put('settings', payload)
      if (!data.success) {
        toast.error(data.message, {
          theme: 'colored',
        })
      }
      if (data.success) {
        toast.success(data.message, {
          theme: 'colored',
        })
      }
    } catch (err) {
      toast.error(err.response.data.message, {
        theme: 'colored',
        // position: 'top-right',
      })
    }
  }
)
export const editProfile = createAsyncThunk(
  'settings/editProfile',
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.profile.put(payload)
      if (!data.success) {
        toast.error(data.message, {
          theme: 'colored',
        })
        thunkAPI.dispatch(set_is_profile_edited(false))
      }
      if (data.success) {
        toast.success(data.message, {
          theme: 'colored',
        })
        thunkAPI.dispatch(set_is_profile_edited(true))
      }
    } catch (err) {
      toast.error(err.response.data.message, {
        theme: 'colored',
        // position: 'top-right',
      })
    }
  }
)
export const resetPassword = createAsyncThunk(
  'settings/resetPassword',
  async (payload, thunkAPI) => {
    try {
      console.log('the payload is', payload)
      const { data } = await instance.auth.put('reset-password', payload)
      console.log(data)
      if (!data.success) {
        toast.error(data.message, {
          theme: 'colored',
        })
        thunkAPI.dispatch(set_is_password_reset(false))
      }
      if (data.success) {
        toast.success(data.message, {
          theme: 'colored',
        })
        thunkAPI.dispatch(set_is_password_reset(true))
      }
    } catch (err) {
      console.log(err)
      console.log('error thrown')
      toast.error(err.response.data.message, {
        theme: 'colored',
        // position: 'top-right',
      })
    }
  }
)

export const requestOtp = createAsyncThunk(
  'settings/requestOtp',
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.auth.post('reset-password', payload)
      console.log('the data is', data)

      if (!data.success) {
        toast.error(data.message, {
          theme: 'colored',
        })
        thunkAPI.dispatch(set_is_otp_sent(false))
      }
      if (data.success) {
        toast.success(data.message, {
          theme: 'colored',
        })
        thunkAPI.dispatch(set_is_otp_sent(true))
      }
    } catch (err) {
      console.log('error thrown')
      toast.error(err.response.data.message, {
        theme: 'colored',
        // position: 'top-right',
      })
    }
  }
)
export const settings = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    set_current_settings: (state, action) => {
      state.selected_setting = action.payload
    },
    set_is_otp_sent: (state, action) => {
      state.isOtpSent = action.payload
    },
    set_is_password_reset: (state, action) => {
      state.isPasswordReset = action.payload
    },
    set_is_profile_edited: (state, action) => {
      state.isProfileEdited = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(requestOtp.pending, (state) => {
      state.loading = true
    })
    builder.addCase(requestOtp.fulfilled, (state) => {
      state.loading = false
    })
    builder.addCase(requestOtp.rejected, (state) => {
      state.loading = false
    })
    builder.addCase(resetPassword.pending, (state) => {
      state.loading = true
    })
    builder.addCase(resetPassword.fulfilled, (state) => {
      state.loading = false
    })
    builder.addCase(resetPassword.rejected, (state) => {
      state.loading = false
    })
    builder.addCase(editProfile.pending, (state) => {
      state.loading = true
    })
    builder.addCase(editProfile.fulfilled, (state) => {
      state.loading = false
    })
    builder.addCase(editProfile.rejected, (state) => {
      state.loading = false
    })
  },
})

export default settings.reducer

export const {
  set_current_settings,
  set_is_otp_sent,
  set_is_password_reset,
  set_is_profile_edited,
} = settings.actions
