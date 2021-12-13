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
   //var nombre = persona.nombre
  var { nombre } = persona
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)
// imprimirNombreEnMayusculas({ nombre: 'Pepito' })
// imprimirNombreEnMayusculas({ apellido: 'Gomez' })

function imprimirNombreYEdad(persona) {
  var nombre = persona.nombre
  var edad = persona.edad
  console.log('Hola, me llamo ' + persona.nombre + ' y tengo ' + persona.edad + ' años')
  //console.log(`Hola, me llamo ${persona.nombre} y tengo ${persona.edad} años'`)  esta es otra forma para unir strings y variables 
}

//function imprimirNombreYEdad( { nombre, edad } ) {
//  console.log('Hola, me llamo ' + nombre + ' y tengo ' + edad + ' años')
//} Otra forma de hacerlo.

imprimirNombreYEdad(sacha)
imprimirNombreYEdad(dario)
  // Hola, me llamo Sacha y tengo 28 años
  // Hola, me llamo Darío y tengo 27 años



