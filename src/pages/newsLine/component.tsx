import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { List, Pagination} from 'antd'
import { Link, match } from 'react-router-dom'


import FiltersEditor from './components/filtersEditor'
import Sidebar from './components/sidebar'

import { fetchNews } from './slice'
import { RootState } from '../../app/rootReducer'
import { NewsState } from './types'
import {UrlParams} from './types'
import styles from './styles.module.css'
let qs = require('qs');




const NewsLine = ({match, location}: UrlParams) => {

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
    
    console.log('update')
  },[page])

  return (
    <div className={styles.newsPage}>
      <div className={styles.sidebar}>
        <Sidebar data={Object.values(qs.parse(location.search.slice(1)))}></Sidebar>
      </div>
      <div className={styles.mainLine}>
        <div className={styles.filtersEditor}>
          <FiltersEditor data={Object.values(qs.parse(location.search.slice(1)))}></FiltersEditor>
        </div>
          <List
          className={styles.newsLine}
          dataSource={data}
          itemLayout="vertical"
          size="large"
          loading={isLoading}
          renderItem={item => (
            <List.Item
              key={item.id}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src={item.image ==='None' ? 'https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png' : item.image }
                />
              }
            >
              <List.Item.Meta
                    title={<Link to={`/news/${item.id}`}>{item.title}</Link>}
                    description={item.description}
                  />
                </List.Item>
          )}
        />
        <Pagination
        onChange={(page) => changePage(page)}
        defaultCurrent={1} 
        total={50} 
        />
      </div>
  </div>
  )
}

export default NewsLine;
