export interface IArticle {
  id: string,
  title: string,
  description: string,
  author: string,
  image: string,
  language: string,
  category: Array<string>,
  published: string,
  url: string
}

export interface IResponse {
  data: {
    status: string,
    news: IArticle[],
    page: string
  }

}

export interface ICategories {
  data: {
    categories: string[],
    description: string,
    status: string
  }

}