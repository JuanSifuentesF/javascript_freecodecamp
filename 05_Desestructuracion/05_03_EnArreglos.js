/* ==== Sintaxis de Desestructuración en Arreglos ==== */

/**Nos permite asignar valores a variables usando arreglos
 * Tambien funciona para intercambiar los valores de dos variables
 */

var a;
var b;
var c;

[a, b, , , c] = [1, 2, 3, 4, 5, 6];

//console.log(a, b, c); // 1 2 5

/* ==== EJEMPLO 01 ==== */

var a = 8;
var b = 6;

[b, a] = [a, b];

console.log("a: " + a, "b: " + b); // 6 8
