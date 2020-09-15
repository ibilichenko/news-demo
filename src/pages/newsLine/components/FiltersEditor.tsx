import React, { MouseEvent } from 'react'
import { Alert } from 'antd'
import { useHistory } from 'react-router-dom'

import styles from './styles.module.css'
import { routePaths } from '../../../routes'

function deleteCategory(paramsStr: string, chosenParam: string | null): string {
  const parsedParamsStr = paramsStr.split(',')

  if (chosenParam) {
    if (parsedParamsStr.indexOf(chosenParam) === 0) {
      const categoryToSearch = paramsStr.replace(
        `${chosenParam}${parsedParamsStr.length > 1 ? ',' : ''}`,
        '' 
      )
      return categoryToSearch.length > 0 ? `&category=${categoryToSearch}` : ''
    } else {
      const categoryToSearch = paramsStr.replace(`,${chosenParam}`, '')
      return categoryToSearch.length > 0 ? `&category=${categoryToSearch}` : ''
    }
  } else {
    return ''
  }
}

const FiltersEditor = ({ data }: { data: string[] }) => {
  let history = useHistory()
  let params: string[] = []
  if (data[1]) {
    params = data[1].split(',')
  }
  if (data.length > 0) {
    return (
      <div className={styles.filtersContainer}>
        <div
          className={styles.cancelBtn}
          onClick={() => history.push(routePaths.newsLine)}
        >
          Cancel
        </div>
        <ul className={styles.filtersCont}>
          {params.map((filter, index) => {
            return (
              <li className={styles.listItem} key={index}>
                <button
                  id={filter}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    history.push(
                      `${routePaths.newsLine}?language=${
                        data[0]
                      }${deleteCategory(
                        data[1],
                        (e.target as HTMLButtonElement).id
                      )}`
                    )
                  }}
                  className={styles.filterTab}
                >
                  {filter}
                </button>
              </li>
            )
          })}
          <li className={styles.listItem}>
            <button className={styles.filterTab}>{data[0]}</button>
          </li>
        </ul>
      </div>
    )
  } else {
    return (
      <Alert message="There are no filters available" type="info" showIcon />
    )
  }
}

export default FiltersEditor
