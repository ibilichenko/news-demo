import React from 'react'
import { mount } from 'enzyme'

import SideBar from '../Sidebar'
import * as actions from '../../slice'

jest.mock('react-redux', () => ({
  useDispatch: () => () => {},
  useSelector: () => ({ categories: [], languages: {}, isLoading: false }),
}))

jest.mock('antd', () => ({
  List: () => <div />,
  Checkbox: {
    Group: () => <div />,
  },
  Radio: {
    Group: () => <div></div>,
  },
}))

describe('lifecycle', () => {
  it('should call `fetchCategories` on mount', () => {
    const fetchCategories = jest.spyOn(actions, 'fetchCategories')
    mount(<SideBar data={[]} />)
    expect(fetchCategories).toBeCalled()
    fetchCategories.mockRestore()
  })
  it('should call `fetchLanguages on mount', () => {
    const fetchLanguages = jest.spyOn(actions, 'fetchLanguages')
    mount(<SideBar data={[]} />)
    expect(fetchLanguages).toBeCalled()
    fetchLanguages.mockRestore()
  })
})
