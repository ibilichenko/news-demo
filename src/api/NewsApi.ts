import { IResponse } from './types';
import axios from 'axios';


const apiKey = "R92E1iCuqR5PoGglxG-8Gv9UO5XQY-kVqYoz1jlwtIoPUaz5";
export const getNewsList = (pageNumber: number):Promise<IResponse> =>  {
    return axios.get(`https://api.currentsapi.services/v1/latest-news?language=en&apiKey=${apiKey}&page_number=${pageNumber}`)
}
