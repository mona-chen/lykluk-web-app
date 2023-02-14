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

export const getprofileVideos = createAsyncThunk(
  'luk/profile_videos',
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.profile.get(`videos/${payload}`, payload)
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
      return thunkAPI.rejectWithValue(err)
    }
  }
)

export const profile = createSlice({
  name: 'profile',
  initialState: {
    // user: JSON.parse(localStorage.getItem("user")),
    isAuth: false,
    profileVideos: {},
    // token: JSON.parse(localStorage.getItem('token')) ,
  },
  reducers: {
    setFyp: (state, action) => {
      //   localStorage.setItem("user", JSON.stringify(action.payload));
      state.isAuth = true
      state.fyp = action.payload
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
  },
})

// Action creators are generated for each case reducer function
<<<<<<< HEAD
export const {} = profile.actions
=======
export const { setProfileVideos } = profile.actions
>>>>>>> 75f95a12c5e1c5e7de37653070966eded96d7d62

export default profile.reducer
