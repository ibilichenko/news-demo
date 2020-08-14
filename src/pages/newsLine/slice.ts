import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { NewsState } from './types'
import {getNewsList} from '../../api/NewsApi'
import axios from 'axios';

const songsInitialState: NewsState = {
  data: [],
  isLoading: false,
  error: null,
}

export const fetchSongs =  createAsyncThunk('songs/fetchList', async (page: number, thunkAPI) => {
  try {
    const response = await getNewsList(page);
    console.log(response)
    return response
  } catch (e) {
    return e.massage
  }
})

const newsSlice = createSlice({
  name: 'news',
  initialState: songsInitialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSongs.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(fetchSongs.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload.data.news
    })
    builder.addCase(fetchSongs.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error as any
    })
  },
})

export default newsSlice.reducer
