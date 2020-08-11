import { ISong } from '../../api/fakeMusicAPI/types'

interface ISongWithFavorite extends ISong {
  favorite?: boolean
}

export type SongsState = {
  data: ISongWithFavorite[]
  isLoading: boolean
  error: string | null
}
