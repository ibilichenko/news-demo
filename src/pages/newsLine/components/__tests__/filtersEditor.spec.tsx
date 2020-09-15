import React from 'react'
import { mount } from 'enzyme'
import FiltersEditor from '../FiltersEditor'

describe('Data fetching tests', () => {
  it('should create elements according to props', () => {
    const component = mount(<FiltersEditor data={['art', 'sports']} />)
    const filters = component.find('.filtersCont')
    console.log(filters.debug())
    expect(filters.children().length).toBe(2)
  })
})
