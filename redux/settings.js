import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { setting_options } from '../utils/settings'

const initialState = {
  selected_setting: setting_options.AccountManagment,
}

export const settings = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    set_current_settings: (state, action) => {
      state.selected_setting = action.payload
    },
  },
})

export default settings.reducer

export const { set_current_settings } = settings.actions
