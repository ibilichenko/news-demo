import React from 'react'
import axios from 'axios'
import { mount } from 'enzyme'
import UserInput from '../UserInput'

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})
jest.mock('axios', () => {
  return {
    post: () => () => Promise.resolve(),
  }
})
jest.mock('react-redux', () => ({
  useDispatch: () => () => {},
  useSelector: () => ({ comments: [], isLoading: false }),
  connect: () => () => {},
}))

describe('`UserInput` test', () => {
  it('should call `axios.post` with correct params `onFinish`', () => {
    const userInput = mount(<UserInput newsId={'123'}></UserInput>)
    let select = userInput.find('ForwardRef(Form)')
    select.prop('onFinish')({ text: 'dd', author: 'sdsd' })
    expect(axios.post).toHaveBeenCalledWith('http://localhost:3001/comments', {
      author: 'sdsd',
      newsId: '123',
      text: 'dd',
    })
  })
})
