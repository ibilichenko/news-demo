import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { SongsState } from './types'
import { fetchSongList } from '../../api/fakeMusicAPI/fakeMusicAPI'

const songsInitialState: SongsState = {
  data: [],
  isLoading: false,
  error: null,
}

export const fetchSongs = createAsyncThunk('songs/fetchList', async () => {
  try {
    const response = await fetchSongList()

    return response
  } catch (e) {
    return e.massage
  }
})

const songsSlice = createSlice({
  name: 'songs',
  initialState: songsInitialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<string>) => {
      const song = state.data.find((el) => el.id === action.payload)

      if (song) {
        song.favorite = true
      }
    },
    cleanSongs: (state) => {
      state.data = []
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSongs.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(fetchSongs.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(fetchSongs.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error as any
    })
  },
})

export const { addToFavorites, cleanSongs } = songsSlice.actions

export default songsSlice.reducer
