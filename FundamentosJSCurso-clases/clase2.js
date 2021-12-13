var nombre = 'Sacha', apellido = 'Lifszyc'

var nombreEnMayusculas = nombre.toUpperCase() // pone un string en mayusculas
var apellidoEnMinusculas = apellido.toLowerCase() // pone un string en minusculas

var primeraLetraDelNombre = nombre.charAt(0) // me devuelve la letra en la posicion del string indicada (en el ejemplo es la posicion 0)
var cantidadDeLetrasDelNombre = nombre.length // me dice la cantidad de letras de un string

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}` // una manera de concatenar strings (ademas de usando el +) se llama interpolar variables.

var str = nombre.substr(1, 2) 
