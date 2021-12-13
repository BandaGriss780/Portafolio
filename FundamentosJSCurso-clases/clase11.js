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

var juan = {
  nombre: 'Juan',
  apellido: 'Gomez',
  edad: 13
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

const MAYORIA_DE_EDAD = 18 // Las variables definidas con const se comportan como las variables, 
                          //excepto que no pueden ser reasignadas. 
                          //Las constantes pueden ser declaradas en mayúsculas o minúsculas. 
                          //Pero por convención, para distinguirlas del resto de variables, 
                          //se escribe todo en mayusculas.

function esMayorDeEdad(persona) {
  return persona.edad >= MAYORIA_DE_EDAD
// Return detiene la ejecución de una función y devuelve el valor de esa función.
}

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}
