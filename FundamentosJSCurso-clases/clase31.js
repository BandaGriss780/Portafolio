const API_URL = 'https://pokeapi.co/api/v2/'
const POKEMON_URL = 'pokemon/:id'
const opts = { crossDomain: true }

function obtenerPokemon(id, callback) {
  const url = `${API_URL}${POKEMON_URL.replace(':id', id)}`

  $
    .get(url, opts, callback)
    .fail(() => {
      console.log(`Sucedió un error. No se pudo obtener el pokemon ${id}`)
    })
}

obtenerPokemon(1, function (pokemon) {
  console.log(`Hola, yo soy ${pokemon.name}`)

  obtenerPokemon(2, function (pokemon) {
    console.log(`Hola, yo soy ${pokemon.name}`)

    obtenerPokemon(3, function (pokemon) {
      console.log(`Hola, yo soy ${pokemon.name}`)

      obtenerPokemon(4, function (pokemon) {
        console.log(`Hola, yo soy ${pokemon.name}`)

        obtenerPokemon(5, function (pokemon) {
          console.log(`Hola, yo soy ${pokemon.name}`)

          obtenerPokemon(6, function (pokemon) {
            console.log(`Hola, yo soy ${pokemon.name}`)

            obtenerPokemon(7, function (pokemon) {
              console.log(`Hola, yo soy ${pokemon.name}`)
            })
          })
        })
      })
    })
  })
})
