import React from 'react'
import { BackTop } from 'antd'
import {parse} from 'qs'

import NewsLine from './components/NewsLine'
import FiltersEditor from './components/FiltersEditor'
import Sidebar from './components/Sidebar'
import Header from './components/Header'

import styles from './styles.module.css'
import { UrlParams } from './types'

const NewsPage = ({ match, location }: UrlParams) => {
  return (
    <>
      <Header />
      <FiltersEditor data={Object.values(parse(location.search.slice(1))) as string[]} />
      <div className={styles.newsPage}>
        <Sidebar data={Object.values(parse(location.search.slice(1))) as string[]} />
        <BackTop />
        <NewsLine match={match} location={location}></NewsLine>
      </div>
    </>
  )
}

export default NewsPage;
