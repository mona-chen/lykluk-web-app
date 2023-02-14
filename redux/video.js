import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import instance from '../utils/axios'
import { toast } from 'react-hot-toast'

export const getVideoComments = createAsyncThunk(
  'luk/get_fyp',

  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.video.get(`comment/${payload}`, payload)
      console.warn('comments', data)

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
        await thunkAPI.dispatch(setComments(data.data))
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

export const getTrendingVideos = createAsyncThunk(
  'luk/get_trending',

  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.discover.get('trending', payload)
      console.warn('trending', data)

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
        await thunkAPI.dispatch(setTrendingVideos(data.data))
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

export const uploadVideo = createAsyncThunk(
  'luk/upload',
  async (payload, thunkAPI) => {
    const payloadData = payload

    try {
      const data = await instance.video.post('', payloadData)
      if ('response' in data) {
        if (!data.response?.data.success) {
          toast.error('Oops, something went wrong', {
            theme: 'colored',
          })
          return data
        }
        if (data.response?.data?.success) {
          toast.success('Video uploaded succesfully', {})
          return data
        }
      }
      // console.log('video upload', data)

      if (data?.data?.success) {
        toast.success('Video uploaded succesfully', {})
        return data?.data
      }
    } catch (err) {
      if (!err.response.data.status) {
        toast.error(err.response.data.message, {})
      }
      return thunkAPI.rejectWithValue(err)
    }
  }
)

export const video = createSlice({
  name: 'video',
  initialState: {
    // user: JSON.parse(localStorage.getItem("user")),
    isAuth: false,
    loading: false,
    video: {},
    trendingVideos: {},
    comments: [],
    videoModal: false,

    // token: JSON.parse(localStorage.getItem('token')) ,
  },
  reducers: {
    setComments: (state, action) => {
      //   localStorage.setItem("user", JSON.stringify(action.payload));
      state.isAuth = true
      state.comments = action.payload
    },

    setVideoModal: (state, action) => {
      state.isAuth = true
      state.videoModal = action.payload
    },
    setVideo: (state, action) => {
      state.isAuth = true
      state.video = action.payload
    },

    setTrendingVideos: (state, action) => {
      state.isAuth = true
      state.trendingVideos = action.payload
    },
  },

  extraReducers: {
    [getVideoComments.pending]: (state) => {
      state.loading = true
    },
    [getVideoComments.fulfilled]: (state) => {
      state.loading = false
    },
    [getVideoComments.rejected]: (state) => {
      // localStorage.removeItem("token");
      state.loading = false
      state.isAuth = false
      state = null
    },

    [getTrendingVideos.pending]: (state) => {
      state.loading = true
    },
    [getTrendingVideos.fulfilled]: (state) => {
      state.loading = false
    },
    [getTrendingVideos.rejected]: (state) => {
      // localStorage.removeItem("token");
      state.loading = false
      state.isAuth = false
      state = null
    },

    [uploadVideo.pending]: (state) => {
      state.loading = true
    },
    [uploadVideo.fulfilled]: (state) => {
      state.loading = false
    },
    [uploadVideo.rejected]: (state) => {
      // localStorage.removeItem("token");
      state.loading = false
      state.isAuth = false
      state = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { setComments, setTrendingVideos, setVideo, setVideoModal } =
  video.actions

export default video.reducer
