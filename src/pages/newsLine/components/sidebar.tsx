import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Checkbox, Radio } from 'antd'
import { fetchCategories, fetchLanguages } from '../slice'
import { RootState } from '../../../app/rootReducer'
import { NewsState } from '../types'
import { CheckboxValueType } from 'antd/lib/checkbox/Group'
import styles from './styles.module.css'
import { RadioChangeEvent } from 'antd/lib/radio'
import { routePaths } from '../../../routes'

function prepareUrl(criterion: string, filters: CheckboxValueType[]): string {
  let resultStr: string = ''
  filters.forEach((filter, index) => {
    if (index === 0) {
      resultStr += `${criterion}=${filter}`
    } else {
      resultStr += `,${filter}`
    }
  })
  return resultStr
}

const Sidebar = ({ data }: { data: string[] }) => {
  const dispatch = useDispatch()
  const { categories, languages } = useSelector<RootState, NewsState>(
    (state) => state.news
  )
  let history = useHistory()
  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(fetchLanguages())
  }, [dispatch])
  let chosenCategories: CheckboxValueType[] = []
  let chosenLanguage: RadioChangeEvent
  return (
    <div className={styles.sidebarWrapper}>
      <div className={styles.firstBlock}>
        <div className={styles.title}>
          <p>Category</p>
          <b>{categories?.length}</b>
        </div>

        <div className={styles.sidebar}>
          <Checkbox.Group
            value={data.length > 1 ? data[1].split(',') : []}
            onChange={(value) => {
              chosenCategories = value
              history.push(
                `${routePaths.newsLine}${
                  data[0] ? `?language=${data[0]}` : '?language=en'
                }${
                  chosenCategories.length > 0
                    ? `&${prepareUrl('category', value)}`
                    : ''
                }`
              )
            }}
          >
            <ul>
              {categories?.map((category, index) => {
                return (
                  <li
                    style={{ listStyleType: 'none', marginLeft: 0 }}
                    key={index}
                  >
                    <Checkbox key={index.toString()} value={category}>
                      {category}
                    </Checkbox>
                  </li>
                )
              })}
            </ul>
          </Checkbox.Group>
        </div>
      </div>
      <div className={styles.secondBlock}>
        <div className={styles.title}>
          <p>languages</p>
          <b>{Object.keys(languages).length}</b>
        </div>

        <Radio.Group
          value={data[0]}
          onChange={(event) => {
            chosenLanguage = event.target.value
            history.push(
              `${routePaths.newsLine}?language=${
                chosenLanguage ? `${chosenLanguage}` : 'en'
              }${data[1] ? `&category=${data[1]}` : ''}`
            )
          }}
        >
          <ul>
            {Object.keys(languages)?.map((language, index) => {
              return (
                <li
                  style={{ listStyleType: 'none', marginLeft: 0 }}
                  key={index}
                >
                  <Radio key={index.toString()} value={languages[language]}>
                    {language}
                  </Radio>
                </li>
              )
            })}
          </ul>
        </Radio.Group>
      </div>
    </div>
  )
}

export default Sidebar
