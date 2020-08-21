import {IArticle} from '../../api/types'

export type NewsState = {
  data: IArticle[]
  isLoading: boolean
  error: string | null
  categories: string[]
}
export interface fetchParams {
  page: number,
  endpoint: string,
  searchParams: string
}

export type UrlParams  = {
  match: {
    url: string,
    path: string,
    params: {
      newsId: string
    },
    isExact: boolean
  },
  location: {
    search: string,
    hash: string,
    key: string,
    pathname: string,
    state: string
  }
 }