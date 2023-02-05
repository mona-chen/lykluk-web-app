import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import instance from '../utils/axios'
import { toast } from 'react-toastify'

export const getVideoComments = createAsyncThunk(
  'luk/get_fyp',
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.video.get(`comment/${payload}`, payload)
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
        await thunkAPI.dispatch(setComments(data))
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

// export const getTrending = createAsyncThunk(
//   'luk/get_fyp',
//   async (payload, thunkAPI) => {
//     try {
//       const { data } = await instance.discover.get('trending', payload)
//       console.log('trending', data)

//       if (!data.success) {
//         toast.error(data.message, {
//           theme: 'colored',
//         })
//         // return thunkAPI.rejectWithValue(data);
//       }
//       if (data.success) {
//         //   toast.success(data.data.message, {
//         //     theme: "colored",
//         //   });
//         await thunkAPI.dispatch(setTrending(data))
//         return data
//       }
//     } catch (err) {
//       // ;
//       if (err.response.data.status === 'fail' && err.response.status !== 401) {
//         toast.error(err.response.data.message, {
//           theme: 'colored',
//           position: 'top-right',
//         })
//       }
//       return thunkAPI.rejectWithValue(err)
//     }
//   }
// )

export const video = createSlice({
  name: 'home',
  initialState: {
    // user: JSON.parse(localStorage.getItem("user")),
    isAuth: false,
    loading: false,
    video: {},
    comments: [
      {
        comment: 'testing comment 1',
        id: 16,
        videoId: 1,
        createdAt: '2022-07-06T23:31:59.799Z',
        deletedAt: null,
        comment_likes: [],
        User: {
          username: '@wanogho3304492',
        },
        replyFrom: [],
        _count: {
          replyFrom: 0,
          comment_likes: 0,
        },
      },
      {
        comment: 'ahhhhh',
        id: 15,
        videoId: 1,
        createdAt: '2022-07-06T23:31:09.000Z',
        deletedAt: null,
        comment_likes: [],
        User: {
          username: '@wanogho3304492',
        },
        replyFrom: [],
        _count: {
          replyFrom: 0,
          comment_likes: 0,
        },
      },
      {
        comment: 'testing comment ',
        id: 14,
        videoId: 1,
        createdAt: '2022-07-06T23:30:53.331Z',
        deletedAt: null,
        comment_likes: [],
        User: {
          username: '@wanogho3304492',
        },
        replyFrom: [],
        _count: {
          replyFrom: 0,
          comment_likes: 0,
        },
      },
      {
        comment: 'testing ',
        id: 13,
        videoId: 1,
        createdAt: '2022-07-06T23:30:28.768Z',
        deletedAt: null,
        comment_likes: [],
        User: {
          username: '@wanogho3304492',
        },
        replyFrom: [],
        _count: {
          replyFrom: 0,
          comment_likes: 0,
        },
      },
      {
        comment: '🤣🤣🤣🤣🤣🤣',
        id: 12,
        videoId: 1,
        createdAt: '2022-07-06T23:30:21.554Z',
        deletedAt: null,
        comment_likes: [
          {
            User: {
              username: '@hilary2380287',
            },
          },
        ],
        User: {
          username: '@wanogho3304492',
        },
        replyFrom: [],
        _count: {
          replyFrom: 0,
          comment_likes: 1,
        },
      },
      {
        comment: '🤣🤣🤣🤣🤣',
        id: 11,
        videoId: 1,
        createdAt: '2022-07-06T23:30:15.945Z',
        deletedAt: null,
        comment_likes: [
          {
            User: {
              username: '@hilary2380287',
            },
          },
        ],
        User: {
          username: '@wanogho3304492',
        },
        replyFrom: [
          {
            comment: 'Reply to comment with ID 11',
            id: 32,
            videoId: 1,
            User: {
              username: '@hilary2380287',
            },
            deletedAt: null,
            createdAt: '2022-07-07T23:13:47.662Z',
            _count: {
              comment_likes: 0,
              replyFrom: 0,
            },
          },
        ],
        _count: {
          replyFrom: 1,
          comment_likes: 2,
        },
      },
      {
        comment: '🤣🤣🤣🤣🤣🤣🤣',
        id: 10,
        videoId: 1,
        createdAt: '2022-07-06T23:29:53.813Z',
        deletedAt: null,
        comment_likes: [],
        User: {
          username: '@wanogho3304492',
        },
        replyFrom: [],
        _count: {
          replyFrom: 0,
          comment_likes: 0,
        },
      },
      {
        comment: 'wahala for who know get boyfriend ',
        id: 4,
        videoId: 1,
        createdAt: '2022-07-06T15:21:48.436Z',
        deletedAt: null,
        comment_likes: [],
        User: {
          username: '@confidence3640348',
        },
        replyFrom: [],
        _count: {
          replyFrom: 0,
          comment_likes: 0,
        },
      },
    ],
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

    setTrending: (state, action) => {
      state.isAuth = true
      state.trending = action.payload
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
  },
})

// Action creators are generated for each case reducer function
export const { setComments, setVideo, setVideoModal } = video.actions

export default video.reducer
