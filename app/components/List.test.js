import React from 'react'
import { mount } from 'enzyme'

import List from './List'

describe('components/List', () => {
  test('it should render correctly/', () => {
    const mockPokemon = [{ pokemon: { name: 'test name' } }]
    const component = mount(<List pokemon={mockPokemon} />)

    expect(component).toMatchSnapshot()
  })
})
