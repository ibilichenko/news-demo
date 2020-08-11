import React from 'react'
import { noop } from 'lodash'
import { shallow } from 'enzyme'
import { Button } from 'antd'
import { HeartOutlined, HeartFilled } from '@ant-design/icons'

import FavoriteButton from '../component'

describe("FavoriteButton", () => {
  const requiredProps = {
    onClick: noop,
  }

  it('should change `icon` prop in case isFavorite is true', () => {
    const wrapper = shallow(<FavoriteButton {...requiredProps} isFavorite />)
    console.log(wrapper.debug());
    
    expect(wrapper.find(Button).prop('icon')).toEqual(<HeartFilled />)
  })

  
  it('should change `icon` prop in case isFavorite is false', () => {
    const wrapper = shallow(<FavoriteButton {...requiredProps} isFavorite={false} />)
    console.log(wrapper.debug());
    
    expect(wrapper.find(Button).prop('icon')).toEqual(<HeartOutlined />)
  })
})