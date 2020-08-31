import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import { Checkbox } from 'antd';
import { fetchCategories } from '../slice'
import { RootState } from '../../../app/rootReducer'
import { NewsState } from '../types'
import { CheckboxValueType } from 'antd/lib/checkbox/Group';


import styles from './styles.module.css'


function prepareUrl(criterion: string, filters: CheckboxValueType[]): string {
    let resultStr: string = '';
    filters.forEach((filter, index) => {
        if (index === 0) {
            resultStr += `?${criterion}=${filter}`
        }
        else {
            resultStr += `,${filter}`
        }
    })
    return resultStr;
}


const SideBar = ({data}:{data: string[]}) => {
    const dispatch = useDispatch()
    const { categories } = useSelector<RootState, NewsState>(
        (state) => state.news
    )
    let history = useHistory();
    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])
    return (
        <div className={styles.sidebarWrapper}>
            <div className={styles.title}><p>Category</p><b>{categories?.length}</b></div>
            <div className={styles.sidebar}>
                <Checkbox.Group
                    value={data.length > 0 ? data[0].split(',') : []}
                    onChange={(value) => {
                        history.push(`/news${prepareUrl('category', value)}`)
                    }}
                >
                    <ul>
                        {
                            categories?.map((category, index) => {
                                return (
                                    <li style={{listStyleType: "none", marginLeft: 0}} key={index}><Checkbox key={index.toString()} value={category}>{category}</Checkbox></li>
                                )
                            })
                        }
                    </ul>
                </Checkbox.Group>
            </div>
        </div>
    )
}

export default SideBar;