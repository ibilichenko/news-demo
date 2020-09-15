import React from 'react'
import { Link } from 'react-router-dom'

import { Tag, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'

import styles from './style.module.css'

const AboutArticle = ({
  articleCategories,
  author,
  published,
}: {
  articleCategories: Array<string>
  author: string
  published: string
}) => {
  return (
    <div className={styles.aboutArticle}>
      <div className={styles.aboutAuthor}>
        <Avatar
        className={styles.avatar}
          
          icon={<UserOutlined />}
        />
        <span className={styles.bold}>{author}</span>
      </div>
      <div className={styles.categories}>
        {articleCategories.map((category) => {
          return (
            <Tag key={category}>
              <Link
                key={category}
                className={styles.listItem}
                to={`/news?category=${category}`}
              >
                {category}
              </Link>
            </Tag>
          )
        })}
      </div>
      <span className={styles.bold}>
        {new Date(published).toLocaleString('en-IN')}
      </span>
    </div>
  )
}

export default AboutArticle
