import React, { useState } from 'react'
import { mount } from 'enzyme'
import { render, unmountComponentAtNode } from "react-dom";
import Enzyme from 'enzyme';
import FiltersEditor from '../filtersEditor'

describe("Data fetching tests", () => {
    it('should create elements according to props', ()=> {
        const component = mount(<FiltersEditor data={['art,sports']} />)
        const filters = component.find('.filtersCont');
        console.log(filters.children.length)
        expect(filters.children().length).toBe(2)
    })
})