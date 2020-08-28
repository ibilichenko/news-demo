import { IResponse, ICategories } from './types';
import axios from 'axios';
import {fetchParams} from '../pages/newsLine/types'


const apiKey = "R92E1iCuqR5PoGglxG-8Gv9UO5XQY-kVqYoz1jlwtIoPUaz5";
export const getNewsList = (fetchParams: fetchParams):Promise<IResponse> =>  {
    return axios.get(`https://api.currentsapi.services/v1/latest-news${fetchParams.searchParams}${fetchParams.searchParams === '' ? '?' : '&'}apiKey=${apiKey}&page_number=${fetchParams.page }`)
}

export const getCategoriesList = ():Promise<ICategories> => {
    return axios.get('https://api.currentsapi.services/v1/available/categories');
}
