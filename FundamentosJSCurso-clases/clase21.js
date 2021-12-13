function Persona(nombre, apellido, altura, sexo) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
  this.sexo = sexo
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
  if(this.altura >= 1.8 && this.sexo === 'masculino') {
    console.log('Soy alto')
  }else if(this.altura >= 1.8 && this.sexo === 'femenino') {
    console.log('Soy alta')
  }else if(this.altura < 1.8 && this.sexo === 'masculino'){
    console.log('No soy alto')
  }
  else {
    console.log('No Soy alta')
  }
}

var sacha = new Persona('Sacha', 'Lifszyc', 1.6, 'masculino')
var erika = new Persona('Erika', 'Luna', 1.5, 'femenino')
var arturo = new Persona('Arturo', 'Martinez', 1.9, 'masculino')
var laura = new Persona('Laura', 'Rodriguez', 1.9, 'femenino')


//En JavaScript hablar de objetos es más bien referirse a Prototipos y no tanto a clases. Si bien en las nuevas versiones de JavaScript existen las clases no son clases como tales, como las pordríamos conocer en cualquier otro lenguaje de programación; no existe la herencia como tal.
//Pero sí existen los Prototipos y vamos a ver que esas llamadas clases terminan siendo Prototipos.

//Qué son los prototipos:

//    …“comenzaremos diciendo que (en JavaScript) todos los objetos dependen de un prototipo y que los prototipos son objetos, es más cualquier objeto puede ser un prototipo”…
//    …"un prototipo es un objeto del que otros objetos heredan propiedades. Los objetos siempre heredan propiedades de algún objeto anterior, de este modo solo el objeto original y primigenio de javascript es el único que no hereda de nadie…
//Objetos => Prototipos

//Crear un prototipo es muy similar a crear una variable:

//• se antepone el keyword function;
//• la primer letra del nombre va en mayúscula;
//• para invocar un nuevo objeto a partir de este prototipo se usa el keyword ‘new’.
//• se le pueden pasar parámetros;
//• para generar nuevos parámetros o atributos dentro de la declaración del objeto se usa el keyword ‘this’
//• es implícito en javaScript el retornar el objeto que se está creando
//• es posible anexar funciones al prototipo usando el apéndice .prototype precedido de el nombre que le asignamos a nuestro nuevo prototipo y sucedido del nombre de nuestra nueva función encadenados. Luego este se iguala a una función anónima.
//• se pueden usar los mismos atributos que en el objeto (this.xxx)
