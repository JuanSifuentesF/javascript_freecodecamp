/* ==== Crear Objetos de Forma Concisa ==== */

// Forma normal.
// const crearPersona = (nombre, edad, idioma) => {
//   return {
//     nombre: nombre,
//     edad: edad,
//     idioma: idioma,
//   };
// };

// console.log(crearPersona("Gino Smith", 28, "Español"));

/* ==== EJEMPLO 01 ==== */

// Forma mas concisa.
const crearPersona = (nombre, edad, idioma) => ({ nombre, edad, idioma });

console.log(crearPersona("Gino Smith", 28, "Español"));