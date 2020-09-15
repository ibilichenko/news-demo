import { combineReducers } from '@reduxjs/toolkit'
import newsReducer from '../pages/newsLine/slice'
import commentReducer from '../pages/separateNews/slice'

const rootReducer = combineReducers({
  news: newsReducer,
  comments: commentReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
