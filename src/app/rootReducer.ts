import { combineReducers } from '@reduxjs/toolkit'
import songsReducer from '../pages/demo/slice'

const rootReducer = combineReducers({
  songs: songsReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
