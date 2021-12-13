var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28
}

var dario = {
  nombre: 'Darío',
  apellido: 'Susnisky',
  edad: 27
}

function imprimirNombreEnMayusculas(persona) {
  // var nombre = persona.nombre
  var { nombre } = persona
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)
// imprimirNombreEnMayusculas({ nombre: 'Pepito' })
// imprimirNombreEnMayusculas({ apellido: 'Gomez' })

function cumpleanos(persona) {
  return {
    ...persona,
    edad: persona.edad + 1,
    //nombre: persona.nombre.toUpperCase()
  }
}

// con los ... puedo "abrir" el objeto para luego escribir modificaciones en el objeto , en el ejemplo esta sumarle 
// +1 a la edad original. (tambien esta el de poner en mayusculas el nombre).
