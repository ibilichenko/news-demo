import React from 'react'
import { mount, shallow } from 'enzyme'
import { render, unmountComponentAtNode } from "react-dom";
import Enzyme from 'enzyme';
import NewsLine from '../components/NewsLine'
import * as actions from '../slice'
import { act } from 'react-dom/test-utils';
import { url } from 'inspector';


Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

jest.mock('react-redux', () => ({
  useDispatch: () => () => { },
  useSelector: () => ({ data: [], isLoading: false })
}))

jest.mock('antd', () => ({
  ...jest.requireActual('antd'),
  List: () => <div />
}))

describe("Data fetching tests", () => {
  // const {Pagination} = jest.requireActual('antd')
const location = { hash: "", pathname: "/news", search: "", state: undefined }
const match={ url: 'news', path: '/news', params: {}, isExact: true }
  it('should call fetchNews after clicking in pagination button', () => {
    const component = mount(<NewsLine location={location} match={match} />)
    console.log(component.debug())
    const fetchNews = jest.spyOn(actions, 'fetchNews')
    component.find('Pagination').at(0).simulate('change', 3)
    component.find('Pagination').at(1).simulate('change', 3)
    expect(fetchNews).toBeCalledWith({ page: 3, endpoint: 'latest-news', searchParams: '' })
  })
  it('should call fetchNews on mount', () => {
    const fetchNews = jest.spyOn(actions, 'fetchNews')
    mount(<NewsLine location={location} match={match} />)
    expect(fetchNews).toBeCalled();
  })
})
