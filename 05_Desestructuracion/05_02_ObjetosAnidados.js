/* ==== Sintaxis de Desestructuracion de Objetos Anidados ==== */

/** `
 * Como podemos usar la sintaxys de desestructuracion para objetos anidados.
 */

/* ==== EJEMPLO 01 ==== */

const usuario = {
  johnDoe: {
    edad: 27,
    correo: "johnDoe@freecodecamp.com",
  },
};

const {
  johnDoe: { edad: edadDelUsuario, correo: correoDelUsuario },
} = usuario;

// console.log(edadDelUsuario, correoDelUsuario);

/* ==== EJEMPLO 02 ==== */

const PRONOSTICO_LOCAL = {
  ayer: {
    minima: 61,
    maxima: 75,
  },
  hoy: {
    minima: 64,
    maxima: 77,
  },
  mañana: {
    minima: 68,
    maxima: 80,
  },
};
// ES5
// const minimoHoy = PRONOSTICO_LOCAL.hoy.minima;
// const maximoHoy = PRONOSTICO_LOCAL.hoy.maxima;

// ES6
const {
  //hoy la propiedad de PRONOSTRICO_LOCAL, siendo un objeto.
  //minima y maxima son propiedades de hoy.
  //minimoHoy y maximoHoy son variables que se crean a partir de las
  // propiedades minima y maxima de hoy.
  hoy: { minima: minimoHoy, maxima: maximoHoy },
} = PRONOSTICO_LOCAL;

console.log(minimoHoy, maximoHoy);
