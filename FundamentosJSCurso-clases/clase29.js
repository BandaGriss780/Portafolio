const API_URL = 'https://pokeapi.co/api/v2/'
const POKEMON_URL = 'pokemon/:id'
const opts = { crossDomain: true }

const onPokemonResponse = function (pokemon) {
  console.log(`Este Pokemon es, ${pokemon.name}`)
}

function obtenerPokemon(id) {
  const url = `${API_URL}${POKEMON_URL.replace(':id', id)}`
  $.get(url, opts, onPokemonResponse)
}

//obtenerPokemon('snorlax')
//obtenerPokemon('ditto')
//obtenerPokemon('pikachu')

  for(var i = 1; i <= 151; i++) {
    obtenerPokemon(i)   
  }
