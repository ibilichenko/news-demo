import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import 'antd/dist/antd.css';
import { Checkbox } from 'antd';
import { fetchCategories } from '../slice'
import { RootState } from '../../../app/rootReducer'
import { NewsState } from '../types'
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { values } from 'lodash';



function prepareUrl(criterion: string, filters: CheckboxValueType[]): string {
   let resultStr: string = '';
   filters.forEach((filter, index) => {
    if(index === 0) {
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
    useEffect(() => {

        dispatch(fetchCategories())
    },[dispatch])
    return (
        <Checkbox.Group onChange={(value) => window.location.href=`/news${prepareUrl('category', value)}` } defaultValue={data.length > 0 ? data[0].split(',') : []} >
            {categories.map(category => {
                return (
                  <>
                    <Checkbox value={category}>{category}</Checkbox><br/>
                  </>
                )
            })}
            
        </Checkbox.Group>
    )
}
export default SideBar;