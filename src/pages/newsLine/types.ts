import {IArticle} from '../../api/types'

export type NewsState = {
  data: IArticle[]
  isLoading: boolean
  error: string | null
}
