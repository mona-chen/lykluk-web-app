import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import instance from '../utils/axios'
import setAuthToken from '../utils/auth'
import { HYDRATE } from 'next-redux-wrapper'
import { ToastBar, toast } from 'react-hot-toast'

export const followUser = createAsyncThunk(
  'luk/get_fyp',
  async (e, thunkAPI) => {
    try {
      const { data } = await instance.profile.post(`follow/${e}`, e)
      // console.log("we here", data)

      if (!data.success) {
        toast.error(data.message, {
          theme: 'colored',
        })
        // return thunkAPI.rejectWithValue(data);
      }
      if (data.success) {
        toast.success(data.message, {
          theme: 'colored',
        })
        // await thunkAPI.dispatch(setFyp(data))
        return data
      }
    } catch (err) {
      // ;
      if (err.response.data.status === 'fail' && err.response.status !== 401) {
        toast.error(err.response.data.message, {
          theme: 'colored',
          position: 'top-right',
        })
      }
      return thunkAPI.rejectWithValue(err)
    }
  }
)

export const getTrending = createAsyncThunk(
  'luk/get_fyp',
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.video.get('video/trending', payload)
      // console.log("we here", data)

      if (!data.success) {
        toast.error(data.message, {
          theme: 'colored',
        })
        // return thunkAPI.rejectWithValue(data);
      }
      if (data.success) {
        //   toast.success(data.data.message, {
        //     theme: "colored",
        //   });
        await thunkAPI.dispatch(setTrending(data))
        return data
      }
    } catch (err) {
      // ;
      if (err.response.data.status === 'fail' && err.response.status !== 401) {
        toast.error(err.response.data.message, {
          theme: 'colored',
          position: 'top-right',
        })
      }
      return thunkAPI.rejectWithValue(err)
    }
  }
)

export const profile = createSlice({
  name: 'profile',
  initialState: {
    // user: JSON.parse(localStorage.getItem("user")),
    isAuth: false,
    followLoading: false,
    // token: JSON.parse(localStorage.getItem('token')) ,
  },
  reducers: {
    setFyp: (state, action) => {
      //   localStorage.setItem("user", JSON.stringify(action.payload));
      state.isAuth = true
      state.fyp = action.payload
    },

    setTrending: (state, action) => {
      state.isAuth = true
      state.trending = action.payload
    },
  },

  extraReducers: {
    [followUser.pending]: (state) => {
      state.followLoading = true
    },
    [followUser.fulfilled]: (state) => {
      state.followLoading = false
    },
    [followUser.rejected]: (state) => {
      // localStorage.removeItem("token");
      state.followLoading = false
      state.isAuth = false
      state = null
    },
  },
})

// Action creators are generated for each case reducer function
export const {} = profile.actions

export default profile.reducer
