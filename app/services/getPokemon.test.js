import getPokemon from './getPokemon'
import request from 'axios'

jest.mock('axios')
request.get.mockReturnValue('testing')
const BASE_URL = 'http://pokeapi.co/api/v2/ability'

describe('getPokemon', () => {
  it('gets pokemon', () => {
    expect(getPokemon.withAbility('mind-control')).toEqual('testing')
    expect(request.get).toHaveBeenCalledWith(`${BASE_URL}/mind-control`)
  })
})
