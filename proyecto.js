//Variables utiles
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%


//Recargo
var recargo = 0
var recargo_total = 0

//Precio final
var precio_final = 0

//Mensajes de alerta para ingresar datos
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")

var casado = prompt("¿Está casado actualmente?")
//Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyuge
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("¿Que edad tiene su esposo/a?", "si/no")
}
//convirtiendo las edades ingresadas a números
var edad_numero = parseInt(edad)
var edad_conyuge_numero = 0
//convirtiendo la edad del cónyuge si se esta casado/a
if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge)
}
// mostrar la edad del conyuge en consola
console.log({edad_conyuge_numero})

var hijos = prompt("¿Tiene hijos o hijas?")
//Comprobamos la cantidad de hijos solamente si los tienen
var cantidad_hijos
var cantidad_hijos_numero = 0
if ("SI" == hijos.toUpperCase()) {
  cantidad_hijos = prompt("¿Cuantos hijos/hijas tiene?")
  /**
   * 1. convierta la cantidad de hijos a numero
   */
  cantidad_hijos_numero = parseInt(cantidad_hijos)
}
// mostrar la cantidad de hijos que se ingreso en consola
 console.log({cantidad_hijos_numero})

//Aquí debe calcular el recargo total basado en las respuestas ingresadas

// Calcular recargo basado en la edad del conyuge
// -------------------------------------------------------

// Si tienen de 18 a 24 años, se les hará un recargo del 10% del precio base
if (18 <= edad_conyuge_numero && edad_conyuge_numero < 25 ) {
  recargo = precio_base * casado_18
}
// Si tienen de 25 a 49 años, se les hará un recargo del 20% del precio base
else if (25 <= edad_conyuge_numero && edad_conyuge_numero < 50) {
  recargo = precio_base * casado_25
}
// Si tienen 50 años o más, se les hará un recargo del 30% del precio base
else if (50 <= edad_conyuge_numero) {
  recargo = precio_base * casado_50
}

// mostrar el recargo basado en la edad del conyuge en consola
console.log("recargo basado en la edad del conyuge:", recargo);

// sumar el recargo basado en la edad del conyuge al
// recargo total
recargo_total += recargo

// mostrar el recargo total hasta ahora en consola
console.log({recargo_total})
// -------------------------------------------------------


// Calcular recargo basado en la cantidad de hijo/hijas
// -------------------------------------------------------

// calcular recargo por hijo
var recargo_por_hijo = hijos_recargo * precio_base

// recargo basado en la cantidad de hijo/hijas
recargo = recargo_por_hijo * cantidad_hijos_numero

// mostrar el recargo basado en la cantidad de hijos/hijas en consola
console.log("recago basado en la cantidad de hijos/hijas:", recargo)

// sumar el recargo basado en la cantidad de hijos/hijas
// al recargo total
recargo_total += recargo

// mostrar el recargo total hasta ahora en consola
console.log({recargo_total})
// -------------------------------------------------------


//Aquí es donde debe de calcular los recargos y el valor final

//Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado

// Calculamos el recargo en base a la edad del asegurado
// -------------------------------------------------------

// si el asegurado tiene de 18 a 24 años, se le hará un
// recargo del 10% del precio base
if (18 <= edad_numero && edad_numero < 25) {
  recargo = precio_base * edad_18
}
// si el asegurado tiene de 25 a 49 años, se le hará un
// recargo del 20% del precio base
else if (25 <= edad_numero && edad_numero < 50) {
  recargo = precio_base * edad_25
}
// si el asegurado tiene 50 años o mas, se le hará un
// recargo del 30% del precio base
else if (50 <= edad_numero) {
  recargo = precio_base * edad_50
}

// mostrar el recargo basado en la edad del asegurado en consola
console.log("recargo basado en la edad del asegurado:", recargo);

// sumar el recargo basado en la edad del asegurado al
// recargo total
recargo_total += recargo

// mostrar el recargo total hasta ahora en consola
console.log({recargo_total})
// -------------------------------------------------------

//aqui puede colocar un else if() con el siguiente rango

/**
 * 2. Recargo por la edad del conyuge
 */

/**
 * 3. Recargo por la cantidad de hijos
 */


precio_final = precio_base + recargo_total
//Resultado
alert ("Para el asegurado "+nombre)
alert ("El recargo total sera de: "+recargo_total)
alert ("El precio sera de: "+precio_final)
