import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { NewsState } from './types'
import {getNewsList} from '../../api/NewsApi'
import axios from 'axios';

const songsInitialState: NewsState = {
  data: [],
  isLoading: false,
  error: null,
}

export const fetchNews =  createAsyncThunk('songs/fetchList', async (page: number, thunkAPI) => {
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
    builder.addCase(fetchNews.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload.data.news
    })
    builder.addCase(fetchNews.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error as any
    })
  },
})
export default newsSlice.reducer
