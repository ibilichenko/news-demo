import React from 'react'
import { BackTop } from 'antd'

import NewsLine from './components/NewsLine'
import FiltersEditor from './components/filtersEditor'
import Sidebar from './components/sidebar'

import { UrlParams } from './types'
import styles from './styles.module.css'
import Header from './components/Header'
let qs = require('qs');




const NewsPage = ({ match, location }: UrlParams) => {

  return (
    <>
      <Header />
      <FiltersEditor data={Object.values(qs.parse(location.search.slice(1)))} />
      <div className={styles.newsPage}>
        <Sidebar data={Object.values(qs.parse(location.search.slice(1)))} />
        {/* <BackTop /> */}
        <NewsLine match={match} location={location}></NewsLine>
      </div>
    </>
  )
}

export default NewsPage;
