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