const API_URL = 'https://pokeapi.co/api/v2/'
const POKEMON_URL = 'pokemon/:id'


const snorUrl = `${API_URL}${POKEMON_URL.replace(':id', 'snorlax')}`
const opts = { crossDomain: true }

const onPokemonResponse = function (poke) {
  console.log(`Este Pokemon es, ${poke.name}`)
}

$.get(snorUrl, opts, onPokemonResponse)
