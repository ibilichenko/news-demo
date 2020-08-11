import React from 'react'
import classnames from 'classnames'
import { Button, Tooltip } from 'antd'
import { HeartOutlined, HeartFilled } from '@ant-design/icons'

import { FavoriteButtonProps } from './types'

import styles from './styles.module.css'

const FavoriteButton = ({ isFavorite, onClick }: FavoriteButtonProps) => {
  const classes = classnames({ [styles.active]: isFavorite })

  return (
    <Tooltip title="Add to favorites">
      <Button
        type="text"
        shape="circle"
        className={classes}
        onClick={onClick}
        icon={isFavorite ? <HeartFilled /> : <HeartOutlined />}
      />
    </Tooltip>
  )
}

export default FavoriteButton
