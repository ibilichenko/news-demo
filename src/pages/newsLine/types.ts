import { type } from 'os'
import { IArticle } from '../../api/types'

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

export type UrlParams = {
  match: IMatch,
  location: ILocation
}
export type IMatch = {
  url: string,
  path: string,
  params: {
    newsId?: string
  },
  isExact: boolean
}

export type ILocation = {
  search: string,
  hash: string,
  pathname: string,
  state: string | undefined,
  key?: string
}