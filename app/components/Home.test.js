import React from 'react'
import { mount } from 'enzyme'

import Home from './Home'

describe('components/Home', () => {
  test('it should render correctly/', () => {
    const component = mount(<Home />)

    expect(component).toMatchSnapshot()
  })
})
