import {
  combineReducers,
  configureStore,
  applyMiddleware,
} from '@reduxjs/toolkit'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import home from './home'
import profile from './profile'
import user from './user'
import video from './video'
import thunk from 'redux-thunk'

const combinedReducer = combineReducers({
  home,
  profile,
  user,
  video,
})

export const makeStore = () =>
  configureStore({
    reducer: combinedReducer,
  })

export const store = () =>
  configureStore({
    reducer: combinedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [HYDRATE],
        },
      }),
  })

export const wrapper = createWrapper(
  makeStore,
  { debug: true },
  applyMiddleware(thunk)
)
