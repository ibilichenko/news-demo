import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { NewsState } from './types'
import { getNewsList, getCategoriesList, getLanguagesList } from '../../api/NewsApi'
import { fetchParams } from './types'

const songsInitialState: NewsState = {
  data: [],
  isLoading: false,
  error: null,
  categories: [],
  languages: {}
}


export const fetchNews = createAsyncThunk('news/fetchList', async (fetchParams: fetchParams, thunkAPI) => {
  try {
    const response = await getNewsList(fetchParams);
    return response.data.news;
  } catch (e) {
    return e.massage
  }
})

export const fetchCategories = createAsyncThunk('categories', async () => {
  try {
    const response = await getCategoriesList();
    return response.data.categories;
  } catch (e) {
    return e.message;
  }
})

export const fetchLanguages = createAsyncThunk('languages', async () => {
  try {
    const response = await getLanguagesList();
    return response.data.languages;
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
      state.data = action.payload
    })
    builder.addCase(fetchNews.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error as string;
    })
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload
    })
    builder.addCase(fetchLanguages.fulfilled, (state, action) => {
      state.languages = action.payload
    })
  },
})
export default newsSlice.reducer
