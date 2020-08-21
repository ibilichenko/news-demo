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
    status: string,
    news: IArticle[],
    page: string
  }

  export interface ICategories {
    categories: string[],
    description: string,
    status: string
  }