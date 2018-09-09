import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import List from './List'
import Home from './Home'

export default function App(props) {
  return (
    <div>
      Your React Node app is set up!
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/pokemon"
          exact
          component={() => <Redirect to="/pokemon/ability/telepathy" />}
        />
        <Route
          path="/pokemon/ability/:ability"
          exact
          render={location => (
            <List pokemon={props.pokemon.list} location={location} />
          )}
        />
        } />
      </Switch>
    </div>
  )
}
