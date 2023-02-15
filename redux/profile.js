import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import instance from '../utils/axios'
import { toast } from 'react-hot-toast'

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

export const getFollowing = createAsyncThunk(
  'luk/get_following',
  async (e, thunkAPI) => {
    try {
      const { data } = await instance.profile.get(`following/@${e}`, e)
      console.log('following', data)

      if (!data.success) {
        // toast.error(data.message, {
        //   theme: 'colored',
        // })
        // return thunkAPI.rejectWithValue(data);
      }
      if (data.success) {
        // toast.success(data.message, {
        //   theme: 'colored',
        // })
        await thunkAPI.dispatch(setFollowing(data))
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

export const getFollowers = createAsyncThunk(
  'luk/get_following',
  async (e, thunkAPI) => {
    try {
      const { data } = await instance.profile.get(`follower/@${e}`, e)
      // console.log("we here", data)

      if (!data.success) {
        // toast.error(data.message, {
        //   theme: 'colored',
        // })
        // return thunkAPI.rejectWithValue(data);
      }
      if (data.success) {
        // toast.success(data.message, {
        //   theme: 'colored',
        // })
        await thunkAPI.dispatch(setFollowers(data))
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

export const getprofileVideos = createAsyncThunk(
  'luk/profile_videos',
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.profile.get(`videos/@${payload}`, payload)
      // alert('hello world')

      if (!data.success) {
        toast.error(data.message, {
          theme: 'colored',
        })
        // return thunkAPI.rejectWithValue(data);
      }
      if (data.success) {
        await thunkAPI.dispatch(setProfileVideos(data))
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
      // return thunkAPI.rejectWithValue(err)
    }
  }
)

export const getUserProfile = createAsyncThunk(
  'luk/user_profile',
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.profile.get(`@${payload}`, payload)

      if (!data.success) {
        toast.error(data.message, {
          theme: 'colored',
        })
        // return thunkAPI.rejectWithValue(data);
      }
      if (data.success) {
        console.log(data)

        await thunkAPI.dispatch(setUserProfile(data?.data))
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
      // return thunkAPI.rejectWithValue(err)
    }
  }
)

export const profile = createSlice({
  name: 'profile',
  initialState: {
    // user: JSON.parse(localStorage.getItem("user")),
    isAuth: false,
    profileVideos: {},
    followers: {},
    following: {},
    userProfile: {},
    // token: JSON.parse(localStorage.getItem('token')) ,
  },
  reducers: {
    setFyp: (state, action) => {
      //   localStorage.setItem("user", JSON.stringify(action.payload));
      state.isAuth = true
      state.fyp = action.payload
    },

    setFollowers: (state, action) => {
      state.isAuth = true
      state.followers = action.payload
    },
    setFollowing: (state, action) => {
      state.isAuth = true
      state.following = action.payload
    },

    setUserProfile: (state, action) => {
      state.isAuth = true
      state.userProfile = action.payload
    },

    setProfileVideos: (state, action) => {
      state.isAuth = true
      state.profileVideos = action.payload
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

    [getFollowers.pending]: (state) => {
      state.loading = true
    },
    [getFollowers.fulfilled]: (state) => {
      state.loading = false
    },
    [getFollowers.rejected]: (state) => {
      // localStorage.removeItem("token");
      state.loading = false
      state.isAuth = false
      state = null
    },

    [getFollowing.pending]: (state) => {
      state.loading = true
    },
    [getFollowing.fulfilled]: (state) => {
      state.loading = false
    },
    [getFollowing.rejected]: (state) => {
      // localStorage.removeItem("token");
      state.loading = false
      state.isAuth = false
      state = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { setProfileVideos, setFollowing, setUserProfile, setFollowers } =
  profile.actions

export default profile.reducer
