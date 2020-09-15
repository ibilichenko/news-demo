import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../app/rootReducer'
import { UrlParams } from '../types'
import { IArticle } from '../../api/types'
import { Typography, PageHeader, Button } from 'antd'
import { Link, useHistory } from 'react-router-dom'
import styles from './style.module.css'
import AboutArticle from './components/AboutArticle'
import CommentWrap from './components/CommentWrap'
import { fetchComments } from './slice'
import { routePaths } from '../../routes'

const { Paragraph } = Typography
const SeparateNews = ({ match, location }: UrlParams) => {
  let {
    params: { newsId },
  } = match
  const dispatch = useDispatch()
  console.log(match, location)
  useEffect(() => {
    dispatch(fetchComments(newsId as string))
  }, [dispatch, newsId])

  const history = useHistory()
  const data = useSelector<RootState, IArticle | undefined>((state) =>
    state.news.data.find((obj) => {
      return obj.id === newsId
    })
  )
  if (data) {
    return (
      <div className={styles.container}>
        <div className={styles.newsContainer}>
          <PageHeader
            className={styles['site-page-header']}
            onBack={() => history.push(routePaths.newsLine)}
            title={data.title}
          />
          <AboutArticle
            articleCategories={data.category}
            published={data.published}
            author={data.author}
          />
          <img
            className={styles.newsImages}
            src={data.image === 'None' ? '' : data.image}
            alt=""
          ></img>
          <Paragraph>{data.description}</Paragraph>
          <a href={data.url}>
            <u>Read more...</u>
          </a>
          <CommentWrap newsId={newsId ? newsId : ''}></CommentWrap>
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.errorMessage}>
        <img src={require('../../img/problem.png')} alt="Problem"></img>
        <Button type="primary" size={'large'}>
          <Link to="/news">Back to home page</Link>
        </Button>
      </div>
    )
  }
}
export default SeparateNews
