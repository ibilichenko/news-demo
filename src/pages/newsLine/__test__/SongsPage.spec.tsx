import React from 'react'
import { mount } from 'enzyme'

import SongsPage from '../component'
import  * as actions from '../slice'

jest.mock('react-redux', () => ({
  useDispatch: () => () => {},
  useSelector: () => ({ data: [], isLoading: false })
}))

jest.mock('antd', () => ({
  List: () => <div/>,
  Typography: {
    Title: () => <div/>
  },
}))

describe("SongsPage", () => {
  describe('lifecycle', () => {
    it('should call `fetchSongs` on mount', () => {
      const fetchSongsSpy = jest.spyOn(actions, 'fetchSongs')
      mount(<SongsPage />)
      
      expect(fetchSongsSpy).toBeCalled()
  
      fetchSongsSpy.mockRestore()
    })

    it('should call `cleanSongs` on unmount', () => {
      const cleanSongsSpy = jest.spyOn(actions, 'cleanSongs')
      mount(<SongsPage />).unmount()
      
      expect(cleanSongsSpy).toBeCalled()
  
      cleanSongsSpy.mockRestore()
    })
  })
})
