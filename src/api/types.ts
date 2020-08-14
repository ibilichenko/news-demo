  export interface IArticle {
    id: string, 
    title: string,
    description: string,
    author: string,
    image: string,
    language: string,
    category: Array<string>,
    published: string
  }

  export interface IResponse {
    status: string,
    news: IArticle[],
    page: string
  }