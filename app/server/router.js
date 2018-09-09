import React from 'react'
import { renderToString } from 'react-dom/server'
import { matchPath, StaticRouter } from 'react-router-dom'

import routes from './routes'
import renderFullPage from './renderFullPage'
import getPokemon from '../services/getPokemon'
import App from '../components/App'

export default async function router(req, res) {
  const match = routes.reduce(
    (acc, route) => matchPath(req.url, { path: route, exact: true }) || acc,
    null
  )

  if (!match) {
    res.status(404).send('page not found')
    return
  }

  try {
    const { data } = await getPokemon.withAbility('telepathy')
    const pokemon = { list: data.pokemon }
    const context = {}
    const html = renderToString(
      <StaticRouter context={context} location={req.url}>
        <App pokemon={pokemon} />
      </StaticRouter>
    )

    res.status(200).send(renderFullPage(html, pokemon))
  } catch (error) {
    res
      .status(404)
      .send(
        `${error}: Oh no! I connot find the telepathic pokemon... maybe they know we were coming!`
      )
  }
}
