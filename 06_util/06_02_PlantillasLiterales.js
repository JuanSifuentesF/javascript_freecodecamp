/* ==== Plantillas Literales o Plantillas de Cadenas ==== */

/**
 * Caracteristicas:
 * - Se usa el acento invertido (backtick) ` en lugar de comillas.
 * - Pueden contener comillas simples y dobles.
 * - Las líneas se preservan como se escriben en el código.
 * - Para reemplazar una variable se escribe ${variable}.
 * - Dentro de ${} también puedes escribir expresiones.
 */

var a = 6;

// console.log(`El valor de a es : ${a}`);

/* ==== EJEMPLO 01 ==== */

var nombre = "Nora";
var edad = 6;

// console.log(`Mi nombre es ${nombre} y tengo ${edad} años.`);

/* ==== EJEMPLO 02 ==== */

var miArreglo = [1, 2, 3, 4];

// console.log(`El arreglo es: ${JSON.stringify(miArreglo)}`);

/* ==== EJEMPLO 03 ==== */

var persona = {
  nombre: "Gino Cass",
  edad: 10,
};

const SALUDO = `Hola mi nombre es ${persona.nombre} y tengo ${persona.edad} años`;

console.log(SALUDO);
