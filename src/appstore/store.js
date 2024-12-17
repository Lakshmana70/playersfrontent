import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { playersApi } from '../serviceslayer/playerApi'

export const store = configureStore({
  reducer: {
    [playersApi.reducerPath]: playersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(playersApi.middleware),
})

setupListeners(store.dispatch)