import request from 'axios'

export default {
  withAbility: ability => {
    const baseUrl = 'http://pokeapi.co/api/v2/ability'
    return request.get(`${baseUrl}/${ability}`)
  },
}
