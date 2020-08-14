import React from 'react'
import { mount } from 'enzyme'

import NewsLine from '../component'
import  * as actions from '../slice'

jest.mock('react-redux', () => ({
  useDispatch: () => () => {},
  useSelector: () => ({ data: [], isLoading: false })
}))

jest.mock('antd', () => ({
  List: () => <div/>,
 
}))

describe("NewsLine", () => {
  describe('lifecycle', () => {
    it('should call `fetchSongs` on mount', () => {
      const fetchSongsSpy = jest.spyOn(actions, 'fetchNews')
      mount(<NewsLine></NewsLine>)
      
      expect(fetchSongsSpy).toBeCalled()
  
      fetchSongsSpy.mockRestore()
    })
  })
})
