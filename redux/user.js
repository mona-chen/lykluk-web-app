import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import instance from '../utils/axios'
import setAuthToken from '../utils/auth'
// import { toast } from 'react-toastify'
import { HYDRATE } from 'next-redux-wrapper'
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';

export const login = createAsyncThunk(
  'luk/login',
  // alert('we her'),
  // toast.error('Something went wrong, try again', {
  //   theme: 'colored',
  // }),
  async (payload, thunkAPI) => {
    try {
      const  { data }  = await instance.auth.post('signin', payload)
      console.log("login", data)

      if (!data.success) {
        toast.error(data.message, {
          theme: 'colored',
        })
        // return thunkAPI.rejectWithValue(data);
      }
      if (data.success) {
          toast.success(data.message, {
            theme: "colored",
          });
          // alert('linsi')
        localStorage.setItem("token", (data?.data.access_token));
        await thunkAPI.dispatch(LOGIN(data))
        return data
      }
    } catch (err) {
      // 
      console.log(err,'errrr')
        toast.error(err.response.data.message, {
          theme: 'colored',
          // position: 'top-right',
        })
      
      return thunkAPI.rejectWithValue(err)
    }
  },
)

export const signup = createAsyncThunk(
  'luk/signup',
  // alert('we her'),
  // toast.error('Something went wrong, try again', {
  //   theme: 'colored',
  // }),
  async (payload, thunkAPI) => {
    try {
      const  { data }  = await instance.auth.post('signup', payload)
      console.log("login", data)

      if (!data.success) {
        toast.error(data.message, {
          theme: 'colored',
        })
        // return thunkAPI.rejectWithValue(data);
      }
      if (data.success) {
          toast.success(data.message, {
            theme: "colored",
          });
        await thunkAPI.dispatch(LOGIN(data))
        return data
      }
    } catch (err) {
      // 
      console.log(err,'errrr')
        toast.error(err.response.data.message, {
          theme: 'colored',
          // position: 'top-right',
        })
      
      return thunkAPI.rejectWithValue(err)
    }
  },
)

export const user = createSlice({
  name: 'user',
  initialState: {
    // user: JSON.parse(localStorage.getItem("user")),
    isAuth: false,
    loading: false,
    user: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : {},
    token: typeof window !== 'undefined' ? localStorage.getItem('token') : '',
  },
  reducers: {
    LOGIN: (state, action) => {
    
      state.isAuth = true
      useEffect(() => {
        if (typeof window !== 'undefined') {
          // Perform localStorage action
        localStorage.setItem("user", JSON.stringify(action?.payload?.data?.sigin_user));
        }
      }, [])

      // state.fyp = action.payload
    },
  },

  extraReducers: {

        [login.pending]: (state) => {
          state.loading = true
        },
        [login.fulfilled]: (state) => {
          state.loading = false
        },
        [login.rejected]: (state) => {
          // localStorage.removeItem("token");
          state.loading = false
          state.isAuth = false
          state = null
        },

        [signup.pending]: (state) => {
          state.loading = true
        },
        [signup.fulfilled]: (state) => {
          state.loading = false
        },
        [signup.rejected]: (state) => {
          // localStorage.removeItem("token");
          state.loading = false
          state.isAuth = false
          state = null
        },
      
    },
  },
)

// Action creators are generated for each case reducer function
export const { LOGIN } = user.actions

export default user.reducer
