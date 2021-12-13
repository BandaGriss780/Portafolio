var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28,
  ingeniero: false,
  cocinero: false,
  cantante: true,
  dj: false,
  guitarrista: false,
  drone: false
}

var mathias = {
  nombre: 'mathias',
  edad: '17'
}



function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`)

  if (persona.ingeniero) {
    console.log('Ingeniero')
  } else {
    console.log('No es ingeniero')
  }

  if (persona.cocinero) {
    console.log('Cocinero')
  }

  if (persona.dj) {
    console.log('DJ')
  }

  if (persona.cantante) {
    console.log('Cantante')
  }

  if (persona.guitarrista) {
    console.log('Gutiarrista')
  }

  if (persona.drone) {
    console.log('Piloto de drone')
  }

}

//imprimirProfesiones(sacha)

function imprimirSiEsMayorDeEdad (persona) {
  let edad = persona.edad;
  console.log(`${persona.nombre}:`)
  if (edad >= 18){
    console.log('Es mayor de edad')
  }else {
    console.log('Es menor de edad')
  }

}

imprimirSiEsMayorDeEdad(sacha)
imprimirSiEsMayorDeEdad(mathias)

