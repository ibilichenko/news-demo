import React, { useState } from 'react'
import { mount } from 'enzyme'
import { render, unmountComponentAtNode } from "react-dom";
import Enzyme from 'enzyme';
import {NewsLine} from '../NewsLine'
import configureStore from 'redux-mock-store'


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
  useSelector: () => ({ data: [], isLoading: false }),
  connect: () => () => {}
}))

jest.mock('antd', () => ({
  ...jest.requireActual('antd'),
  List: () => <div />
}))

describe("Data fetching tests", () => {

  const location = { hash: "", pathname: "/news", search: "", state: undefined }
  const match = { url: 'news', path: '/news', params: {}, isExact: true }
  
  it('should call fetchNews on mount', () => {
    let dispatch = jest.fn();
    const component = mount(<NewsLine location={location} match={match} fetchNews={dispatch} />)
    expect(dispatch).toBeCalled();
  })
  it('should change state after clicking in pagination button', () => {
    let dispatch = jest.fn();
    let component = mount(<NewsLine location={location} match={match} fetchNews={dispatch} />)
    let select = component.find('Pagination').at(0);
    select.prop('onChange')(1)
    expect(component.state('page')).toEqual(1)
  })
  it('should call fetchNews after clicking in pagination button', () => {
    let dispatch = jest.fn();
    let component = mount(<NewsLine location={location} match={match} fetchNews={dispatch} />)
    let select = component.find('Pagination').at(0);
    select.prop('onChange')(2)
    expect(dispatch).toHaveBeenCalledWith(2, {"hash": "", "pathname": "/news", "search": "", "state": undefined} )
  })
  jest.clearAllMocks()
})
