import React from 'react'
import { mount } from 'enzyme'
import SeparateNews from '../SeparateNews'
import * as actions from '../slice'

jest.mock('react-redux', () => {
  return {
    useDispatch: () => () => {},
    useSelector: () => {
      {
      }
    },
  }
})

jest.mock('react-router-dom', () => {
  return {
    Link: () => <div />,
    useHistory: () => {},
  }
})

describe('`SeparateNews` tests', () => {
  it('should call `fetchComments` on mount', () => {
    const match = {
      path: '/news/:newsId',
      url: '/news/ed7d3444-bfa9-4e45-987d-a7d38355eb87',
      isExact: true,
      params: { newsId: 'ed7d3444-bfa9-4e45-987d-a7d38355eb87' },
    }
    const location = {
      pathname: '/news/ed7d3444-bfa9-4e45-987d-a7d38355eb87',
      search: '',
      hash: '',
      state: undefined,
      key: 'potkhn',
    }
    const fetchComments = jest.spyOn(actions, 'fetchComments')
    mount(<SeparateNews match={match} location={location}></SeparateNews>)
    expect(fetchComments).toBeCalled()
    fetchComments.mockRestore()
  })
})
