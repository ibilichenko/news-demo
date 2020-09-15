import React from 'react'
import { mount } from 'enzyme'
import CommentList from '../CommentList'

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})
const fetchedComments = [
  {
    _id: '5f5746801ab1223a000d46d4',
    author: 'Illia',
    newsId: '123',
    text: 'Hello world',
    __v: 0,
  },
  {
    _id: '5f57495581447f08f802b950',
    author: 'Illia',
    newsId: '13',
    text: 'Hello world',
    __v: 0,
  },
]
jest.mock('react-redux', () => ({
  useDispatch: () => () => {},
  useSelector: () => ({
    comments: [
      {
        _id: '5f5746801ab1223a000d46d4',
        author: 'Illia',
        newsId: '123',
        text: 'Hello world',
        __v: 0,
      },
      {
        _id: '5f57495581447f08f802b950',
        author: 'Illia',
        newsId: '13',
        text: 'Hello world',
        __v: 0,
      },
    ],
    isLoading: false,
  }),
  connect: () => () => {},
}))

jest.mock('../UserInput', () => {
  return {
    __esModule: true,
    default: () => {
      return <div></div>
    },
  }
})

describe('render test', () => {
  it('should render correct count of comments', () => {
    const commentList = mount(<CommentList articleId={'ddd'}></CommentList>)
    console.log(commentList.debug())
    let comments = commentList.find('.commentListItem')

    expect(comments.length).toEqual(fetchedComments.length)
  })
})
