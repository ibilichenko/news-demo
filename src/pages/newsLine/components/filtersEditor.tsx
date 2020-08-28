import React from 'react';
import { Alert } from 'antd';
import styles from './styles.module.css'
import { useHistory } from "react-router-dom";


const FiltersEditor = ({ data }: { data: string[] }) => {
  let history = useHistory();
  let params: string[] = [];
  if (data.length !== 0) {
    params = data[0].split(',')
  }
  if (data.length > 0) {
    return (
      <div className={styles.filtersContainer}>
        <div className={styles.cancelBtn} onClick={() => history.push('/news/')}>Cancel</div>
        <ul style={{display: 'flex'}}>
        {
          params.map((filter, index) => {
            return (
              
                <li style={{listStyleType: "none", marginLeft: 0}} key={index}><div className={styles.filterTab} onClick={() => history.push('/news/')}>{filter}</div></li>
              
            )
          })
        }
        </ul>
      </div>
    )
  } else {
    return (
      <Alert message="There are no filters available" type="info" showIcon />
    )
  }

}

export default FiltersEditor;