

interface IArticle {
  id: string, 
  title: string,
  description: string,
  author: string,
  image: string,
  language: string,
  category: Array<string>,
  published: string
}

export type NewsState = {
  data: IArticle[]
  isLoading: boolean
  error: string | null
}
