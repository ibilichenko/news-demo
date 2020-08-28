import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { List, Pagination, Skeleton } from 'antd'
import { Link } from 'react-router-dom'
import { RootState } from '../../../app/rootReducer'
import { NewsState } from '.././types'
import { UrlParams } from '../types'
import { fetchNews } from '../slice'
import styles from '../styles.module.css'

const NewsLine = ({ match, location }: UrlParams) => {

  const [page, changePage] = useState(0);
  const dispatch = useDispatch()
  const { data, isLoading } = useSelector<RootState, NewsState>(
    (state) => state.news
  )
  useEffect(() => {

    dispatch(fetchNews({
      page: page,
      endpoint: location.search === '' ? 'latest-news' : 'search',
      searchParams: location.search
    }))
  }, [page, location.search, dispatch])
  console.log(match)
  return (
    <div className={styles.mainLine}>
      <List
        className={styles.newsLine}
        dataSource={data}
        itemLayout="vertical"
        size="large"
        renderItem={item => (
          <>
            <Skeleton loading={isLoading} active>
              <List.Item
                key={item.id}
                extra={
                  <img
                    width={272}
                    alt="logo"
                    src={item.image === 'None' ? 'https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png' : item.image}
                  />
                }
              >

                <List.Item.Meta
                  title={<Link to={`/news/${item.id}`}>{item.title}</Link>}
                  description={item.description}
                />

              </List.Item>
            </Skeleton>
          </>

        )}
      />
      <Pagination
        onChange={(page) => changePage(page)}
        defaultCurrent={1}
        total={50}
      />
    </div>
  )
}
export default NewsLine;