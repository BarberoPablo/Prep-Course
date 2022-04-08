// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return (nombre.charAt(0).toUpperCase() + nombre.slice(1));
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  return cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  /*Lo que hace es reduce el arreglo "numeros" a un solo valor, function necesita un acumulador, que serían 
  los valores que se van pasando por parametro a la misma funcion (la suma en este caso) y elemento sería
  el numero u objeto que se esta analizando en este momento osea el numero decierta posicion del arreglo*/
  var suma = numeros.reduce(function(acumulador, elemento){
    return acumulador + elemento;
  }, 0);
  cb(suma);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  // Tu código:
  /* El forEach es un mensaje que se le manda a alguna coleccion de elementos y por parametro se pasa
  una funcion que querramos ejecutar con cada valor de la coleecion*/
  array.forEach(cb);
  
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  // Tu código:
  /* Sirve para mapear los elementos de una coleccion, debemos declarar una variable que contendra los valores del mapeo,
  a esta variable asignarle la coleccion.map(function callback) podemos tener la function callback ya implementada o podemos
  crear una ahi mismo: coleccion.map(functionCallback(current value, index, array){ lo que hace la funcion}
  Puede ser algo asi tambien coleccion.map(functionCallback(x){ x * x;} la funcctionCallback recorre llamando a los elementos "x"
  y los multiplica por si mismos*/
  let newArray = array.map(cb);
  return newArray;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  //El metodo filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
  function letterA(element){
    return element.charAt(0) == 'a';
  }

  let nuevoArray = array.filter(letterA);
  return nuevoArray;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
