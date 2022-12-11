import { configureStore } from '@reduxjs/toolkit'
import { moviesApi } from './api/apiSlice'

const reducer = {
  [moviesApi.reducerPath]: moviesApi.reducer
}

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware)
})
