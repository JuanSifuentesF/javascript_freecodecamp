/* ==== Sintaxis de Desestructuración ==== */

/**
 * Nos permite asignar propiedades de un objeto a variables, que podemos usar
 * en nuestro programa.
 */

/* ==== EJEMPLO 01 ==== */

// Un objeto que representa un usuario

const usuario = {
  nombre: "Gino Smith",
  edad: 34,
};

const { nombre, edad } = usuario;

/* ==== EJEMPLO 02 ==== */

var coordenadas = {
  x: 4,
  y: 6,
  z: 12,
};

// ES5
// var x = coordenadas.x;
// var y = coordenadas.y;
// var z = coordenadas.z;

// ES6
const { x, y, z } = coordenadas;

console.log(x);
console.log(y);
console.log(z);
