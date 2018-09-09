import React from 'react'

export default function List(props) {
  return (
    <div>
      <h1>Ability</h1>
      <ul>
        {props.pokemon.map(({ pokemon }) => {
          return <li key={pokemon.name}>{pokemon.name}</li>
        })}
      </ul>
    </div>
  )
}
