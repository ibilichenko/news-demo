import React from 'react'
import { mount } from 'enzyme'

import SideBar from '../sidebar'
import  * as actions from '../../slice'

jest.mock('react-redux', () => ({
  useDispatch: () => () => {},
  useSelector: () => ({ data: [], isLoading: false })
}))

jest.mock('antd', () => ({
  List: () => <div/>,
  Checkbox: {
    Group: () => <div/>
  },
}))


  describe('lifecycle', () => {
    it('should call `fetchCategories` on mount', () => {
      const fetchCategories = jest.spyOn(actions, 'fetchCategories')
      mount(<SideBar data={[]} />)
      expect(fetchCategories).toBeCalled()
      fetchCategories.mockRestore()
    })
})