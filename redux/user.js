import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import instance from '../utils/axios'
import setAuthToken from '../utils/auth'
// import { toast } from 'react-toastify'
import { HYDRATE } from 'next-redux-wrapper'
import { toast } from 'react-hot-toast';

export const login = createAsyncThunk(
  'luk/login',
  // alert('we her'),
  // toast.error('Something went wrong, try again', {
  //   theme: 'colored',
  // }),
  async (payload, thunkAPI) => {
    try {
      const  data  = await instance.post('signin', payload)
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
        await thunkAPI.dispatch(LOGIN(data))
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
  },
)

export const user = createSlice({
  name: 'user',
  initialState: {
    // user: JSON.parse(localStorage.getItem("user")),
    isAuth: false,
    loading: false,
    fyp: {},
    // token: JSON.parse(localStorage.getItem('token')) ,
  },
  reducers: {
    LOGIN: (state, action) => {
      //   localStorage.setItem("user", JSON.stringify(action.payload));
      state.isAuth = true
      state.fyp = action.payload
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
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
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { LOGIN } = user.actions

export default user.reducer
