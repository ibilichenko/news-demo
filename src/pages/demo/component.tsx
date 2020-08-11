import React, { useEffect } from 'react'
import { cleanSongs, fetchSongs, addToFavorites } from './slice'
import { useDispatch, useSelector } from 'react-redux'
import { List, Typography } from 'antd'
import { RootState } from '../../app/rootReducer'
import { SongsState } from './types'

import styles from './styles.module.css'
import FavoriteButton from './components/favoriteButton'

const SongsPage = () => {
  const dispatch = useDispatch()
  const { data, isLoading } = useSelector<RootState, SongsState>(
    (state) => state.songs
  )

  useEffect(() => {
    dispatch(fetchSongs())

    return () => {
      dispatch(cleanSongs())
    }
  }, [dispatch])

  return (
    <div className={styles.container}>
      <Typography.Title level={2}>Good luck! Have Fun!</Typography.Title>
      <Typography.Title type="secondary" level={3}>
        This is an example
      </Typography.Title>

      <List
        dataSource={data}
        itemLayout="horizontal"
        loading={isLoading}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            actions={[
              <FavoriteButton
                isFavorite={item.favorite}
                onClick={() => dispatch(addToFavorites(item.id))}
              />,
            ]}
          >
            <List.Item.Meta
              title={<a href="https://ant.design">{item.name}</a>}
              description={item.artist}
            />
            <span>{item.album}</span>
          </List.Item>
        )}
      />
    </div>
  )
}

export default SongsPage
