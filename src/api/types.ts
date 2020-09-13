import { Interface } from "readline";
import { idText } from "typescript";

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

export interface ILanguages {
  data: {
    languages: {
      [propName: string]: string
    },
    description: string,
    status: string
  }
}

export interface IComments {
  data: Array<IComment>
}

export interface IComment {
  _id: string,
    author: string,
    newsId: string,
    text: string,
    __v: string
}