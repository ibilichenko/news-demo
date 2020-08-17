import React from 'react'
import { mount, shallow } from 'enzyme'
import { render, unmountComponentAtNode } from "react-dom";
import Enzyme from 'enzyme';
import NewsLine from '../component'
import  * as actions from '../slice'
import { act } from 'react-dom/test-utils';

jest.mock('react-redux', () => ({
  useDispatch: () => () => {},
  useSelector: () => ({ data: [], isLoading: false })
}))

jest.mock('antd', () => ({
  List: () => <div/>,
  Pagination: () => <div/>
}))

describe("Pagination button test", () => {
  const onChange = jest.fn();
  let container = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  })
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  })
  it("should change main page after clicking in pagination button 3", () => {
    act(() => {
      render(<NewsLine/>, container);
    })
    const btn = document.querySelector('.ant-pagination-item-3')?.firstChild;
    act(() => {
      btn?.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    })
    expect(btn?.parentElement?.classList.contains('ant-pagination-item-active')).toBe(true)
  })
  
})
describe("state testing", () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    wrapper = Enzyme.shallow(<NewsLine />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should change state after clicking in pagination button 2', () => {
    console.log(wrapper.debug())
    wrapper.find('.ant-pagination-item-2').props().onClick();
    expect(setState).toHaveBeenCalledWith(2);
  })
  it("should change state after clicking in pagination button 3", () => {
    wrapper.find('.ant-pagination-item-3').firstChild.props().onClick();
    expect(setState).toHaveBeenCalledWith(3);
  })
})
  describe('lifecycle', () => {
    jest.mock('react-redux', () => ({
      useDispatch: () => () => {},
      useSelector: () => ({ data: [], isLoading: false })
    }))
    
    jest.mock('antd', () => ({
      List: () => <div/>,
      Pagination: () => <div/>
    }))
    it('should call `fetchNews` on mount', () => {
      const fetchSongsSpy = jest.spyOn(actions, 'fetchNews')
      mount(<NewsLine></NewsLine>)
      
      expect(fetchSongsSpy).toBeCalled()
  
      fetchSongsSpy.mockRestore()
    })
  })

