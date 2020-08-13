import React, { useEffect, useState } from 'react'
import { fetchSongs } from './slice'
import { useDispatch, useSelector } from 'react-redux'
import { List, Pagination} from 'antd'
import { RootState } from '../../app/rootReducer'
import { NewsState } from './types'


import styles from './styles.module.css'
import FavoriteButton from './components/favoriteButton'



const NewsLine = () => {

  const [page, changePage] = useState(0);
  const dispatch = useDispatch()
  const { data, isLoading } = useSelector<RootState, NewsState>(
    (state) => state.news
  )

  useEffect(() => {

      dispatch(fetchSongs(page))
    
    console.log('update')
  },[page])

  return (
    <>
    <List
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
              title={<a href="https://ant.design">{item.title}</a>}
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
  </>
  )
}

export default NewsLine;
