import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../app/rootReducer'
import {UrlParams} from '../types'
import { IArticle } from '../../../api/types'
import { Space, Typography, Button } from 'antd';
import { Link, useRouteMatch } from 'react-router-dom';

import styles from './styles.module.css'
import "antd/dist/antd.css";

const {Title, Text, Paragraph} = Typography;
const SeparateNews = ({match, location}: UrlParams) => {
       console.log('location', location)
    let {
        params: { newsId }
      } = match;
      
      console.log(newsId)
      const data = useSelector<RootState, IArticle | undefined>(
        (state) => state.news.data.find(obj => {
          return obj.id === newsId;
        })
      )
      
      console.log(data)
      if(data) {
        return (
          <div className={styles.container}>
           <div className={styles.newsContainer}>
             <Title level={1}>{data.title}</Title>
             <div className={styles.articleInfo}>
             <div className={styles.authorInfo}>
               <img className={styles['author-avatar']} src='https://i.pinimg.com/originals/a5/00/2c/a5002c4e585253a0c133f73f60b99bb3.jpg' alt='author'></img>
               <p>{data.author}</p>
              </div>
              <div className={styles.categories}>
               {data.category.map((category, index) => {
                 if(index !== 0) {
                   return(
                     <>
                      <p>,</p>
                     <Link to={`/news?category=${category}`}>{category}</Link>
                     </>
                   )
                 } else {
                    return(
                      <Link to={`/news?category=${category}`}>{category}</Link>
                  )
                 }
                 
               }
               )
               }
               </div>
               <p>{data.published}</p>
             </div>
             <img className={styles.newsImages} src={data.image === 'None'? '' : data.image} alt=''></img>
             <Paragraph>{data.description}</Paragraph>
             <a href={data.url}><u>Read more...</u></a>
           </div>
           </div>
         )
      }
      else {
        return (
          <h2>Data was lost</h2>
        )
      }
      
}
export default SeparateNews;
