import { combineReducers } from '@reduxjs/toolkit'
import newsReducer from '../pages/newsLine/slice'

const rootReducer = combineReducers({
  news: newsReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
