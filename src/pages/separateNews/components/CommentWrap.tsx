import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import CommentList from './CommentList'
import { CommentsState } from '../types'
import { RootState } from '../../../app/rootReducer'

import { Button } from 'antd'
import { CommentOutlined } from '@ant-design/icons'
import styles from './style.module.css'

const CommentWrap = ({ newsId }: { newsId: string }) => {
  const handleClick = () => {
    changeState(isOpen === false ? true : false)
  }
  const { comments } = useSelector<RootState, CommentsState>(
    (state) => state.comments
  )
  let [isOpen, changeState] = useState(false)
  if (isOpen === true) {
    return (
      <>
        <div className={styles.commentWrap}>
          <Button
            type="primary"
            onClick={handleClick}
            shape="round"
            icon={<CommentOutlined />}
            size={'small'}
          />
          <span className={styles.bold}>{comments.length}</span>
        </div>
        <CommentList articleId={newsId} />
      </>
    )
  } else {
    return (
      <div className={styles.commentWrap}>
        <Button
          onClick={handleClick}
          shape="round"
          icon={<CommentOutlined />}
          size={'small'}
        />
        <span className={styles.bold}>{comments.length}</span>
      </div>
    )
  }
}

export default CommentWrap
