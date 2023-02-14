import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import instance from '../utils/axios'
import setAuthToken from '../utils/auth'
import { toast } from 'react-toastify'
import { HYDRATE } from 'next-redux-wrapper'

export const getFyp = createAsyncThunk(
  'luk/get_fyp',
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.video.get('fyp', payload)
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
        await thunkAPI.dispatch(setFyp(data))
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

export const getHashtags = createAsyncThunk(
  'luk/get_hashtags',
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.discover.get('trending/hashtags', payload)
      console.log('hashtags', data)

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
        await thunkAPI.dispatch(setTrendingHashtags(data))
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

export const home = createSlice({
  name: 'home',
  initialState: {
    // user: JSON.parse(localStorage.getItem("user")),
    isAuth: false,
    loading: false,
    trendingHashtags: {},
    fyp: {},
    authModal: false,
    // token: JSON.parse(localStorage.getItem('token')) ,
  },
  reducers: {
    setFyp: (state, action) => {
      //   localStorage.setItem("user", JSON.stringify(action.payload));
      state.isAuth = true
      state.fyp = action.payload
    },

    setAuthModal: (state, action) => {
      state.isAuth = true
      state.authModal = action.payload
    },

    setTrendingHashtags: (state, action) => {
      state.isAuth = true
      state.trendingHashtags = action.payload
    },
  },

  extraReducers: {
    [getFyp.pending]: (state) => {
      state.loading = true
    },
    [getFyp.fulfilled]: (state) => {
      state.loading = false
    },
    [getFyp.rejected]: (state) => {
      // localStorage.removeItem("token");
      state.loading = false
      state.isAuth = false
      state = null
    },

    [getHashtags.pending]: (state) => {
      state.loading = true
    },
    [getHashtags.fulfilled]: (state) => {
      state.loading = false
    },
    [getHashtags.rejected]: (state) => {
      // localStorage.removeItem("token");
      state.loading = false
      state.isAuth = false
      state = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { setFyp, setAuthModal, setTrendingHashtags } = home.actions

export default home.reducer
