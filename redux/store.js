import {
  combineReducers,
  configureStore,
  applyMiddleware,
} from '@reduxjs/toolkit'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import home from './home'
import user from './user'
import thunk from 'redux-thunk'

const combinedReducer = combineReducers({
  home,
  user
})

export const makeStore = () =>
  configureStore({
    reducer: combinedReducer,
  })

export const store = () =>
  configureStore({
    // <-- a function
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
export const wrapper = createWrapper(
  makeStore,
  { debug: true },
  applyMiddleware(thunk),
)
