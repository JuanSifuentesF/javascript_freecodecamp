/* ==== Funciones Flecha ==== */

/* Sirven para crear funciones anonimas, que no requiere nombre */

/* ==== EJEMPLO 01 ==== */

const fecha = function () {
  //No cuenta con nombre
  return new Date();
};

// Transformando a funcion flecha

const fecha2 = () => new Date();

/* Las funciones flecha son muy utiles cuando necesitamos pasar una funcion como argumento
a otra funcion */

