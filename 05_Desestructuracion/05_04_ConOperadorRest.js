/* ==== Sintaxis de Desestructuración con el Operador rest ==== */

/** El operador REST agrupa los elementos y forma un arreglo
 * cuando se usa con funciones, agrupaba los argumentos,
 * se va a usar este operador para desestructurar arreglos.
 */

/* ==== EJEMPLO 01 ==== */

var a;
var b;
var arr; //variable que se usa para el rest.

[a, b, ...arr] = [1, 2, 3, 4, 5, 6, 7];

// console.log(a); // 1
// console.log(b); // 2
// console.log(arr); //[ 3, 4, 5, 6, 7 ]

/* ==== EJEMPLO 02 ==== */

/** Vamos a usar este principio para remover los 3 primeros
 * de un arreglo
 */

const arregloInicial = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removerTresPrimerosElementos(arreglo) {
  const [, , , ...nuevoArreglo] = arreglo;
  return nuevoArreglo;
}

const arregloFinal = removerTresPrimerosElementos(arregloInicial);

console.log(arregloFinal);
