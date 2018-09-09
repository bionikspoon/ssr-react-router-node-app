import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './components/App'

hydrate(
  <BrowserRouter>
    <App pokemon={window.__PRELOADED_STATE__} />
  </BrowserRouter>,
  document.getElementById('root')
)
