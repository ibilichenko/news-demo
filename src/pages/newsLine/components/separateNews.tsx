import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../app/rootReducer'
import {UrlParams} from '../types'
import { IArticle } from '../../../api/types'
import { Typography, PageHeader } from 'antd';
import { Link } from 'react-router-dom';

import styles from './styles.module.css'
import "antd/dist/antd.css";
import { flatMap } from 'lodash'

const {Paragraph} = Typography;
const SeparateNews = ({match, location}: UrlParams) => {
    let {
        params: { newsId }
      } = match;
      
      const data = useSelector<RootState, IArticle | undefined>(
        (state) => state.news.data.find(obj => {
          return obj.id === newsId;
        })
      )
      if(data) {
        return (
          <div className={styles.container}>
           <div className={styles.newsContainer}>
             <PageHeader
              className={styles['site-page-header']}
              onBack={() => null}
              title={data.title}/>
             <div className={styles.articleInfo}>
             <div className={styles.authorInfo}>
               <img className={styles['author-avatar']} src='https://i.pinimg.com/originals/a5/00/2c/a5002c4e585253a0c133f73f60b99bb3.jpg' alt='author'></img>
               <p>{data.author}</p>
              </div>
              <div className={styles.categories}>
                <ul style={{display: 'flex'}}>
               {
               data.category.map((category, index) => {
                 if(index !== 0) {
                   return(
                     <li key={index} style={{display: "flex"}}>
                      <p>,</p>
                     <Link to={`/news?category=${category}`}>{category}</Link>
                     </li>
                   )
                 } else {
                    return(
                      <li key={index}><Link to={`/news?category=${category}`}>{category}</Link></li>
                  )
                 }
                }
               )
               }
               </ul>
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
