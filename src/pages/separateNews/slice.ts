import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { CommentsState } from './types'
import { getArticleComments } from '../../api/NewsApi'

const initialSate: CommentsState = {
  comments: [],
  loading: false,
  error: null,
}

export const fetchComments = createAsyncThunk(
  'comments',
  async (articleId: string, thunkApi) => {
    try {
      const response = await getArticleComments(articleId)
      return response.data
    } catch (e) {
      return e.message
    }
  }
)

const commentsSlice = createSlice({
  name: 'comments',
  initialState: initialSate,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.loading = false
      if (action.payload === 'Request failed with status code 404') {
        state.comments = []
      } else {
        state.comments = action.payload
      }
    })
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.loading = false
      state.error = action.error as string
    })
  },
})

export default commentsSlice.reducer
