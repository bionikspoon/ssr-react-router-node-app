import React from 'react'
import { mount } from 'enzyme'
import { StaticRouter, Redirect } from 'react-router-dom'

import App from './App'

describe('components/App', () => {
  test('it should render Home component for route /', () => {
    const component = mount(
      <StaticRouter context={{}} location="/">
        <App />
      </StaticRouter>
    )

    expect(component).toMatchSnapshot()
  })
  test('it should render List component for route /pokemon/ability/testing', () => {
    const mockPokemon = { list: [] }
    const component = mount(
      <StaticRouter context={{}} location="/pokemon/ability/testing">
        <App pokemon={mockPokemon} />
      </StaticRouter>
    )

    expect(component).toMatchSnapshot()
  })
  test('it should render Redirect component for route /pokemon', () => {
    const component = mount(
      <StaticRouter context={{}} location="/pokemon">
        <App />
      </StaticRouter>
    )

    expect(component).toMatchSnapshot()
    expect(component.find(Redirect).props().to).toEqual(
      '/pokemon/ability/telepathy'
    )
  })
})
