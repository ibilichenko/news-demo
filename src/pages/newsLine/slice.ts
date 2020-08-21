import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { NewsState } from './types'
import {getNewsList, getCategoriesList} from '../../api/NewsApi'
import {fetchParams} from './types'
import axios from 'axios';

const songsInitialState: NewsState = {
  data: [],
  isLoading: false,
  error: null,
  categories: [],
}


export const fetchNews =  createAsyncThunk('news/fetchList', async (fetchParams: fetchParams, thunkAPI) => {
  try {
    const response = await getNewsList(fetchParams);
    console.log(response)
    return response
  } catch (e) {
    return e.massage
  }
})

export const fetchCategories = createAsyncThunk('categories', async () => {
  try {
    const response = await getCategoriesList();
    console.log(response);
    return response;
  } catch (e) {
    return e.message;
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
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload.data.categories
    })
  },
})
export default newsSlice.reducer
