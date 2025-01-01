/* ==== OPERADOR CONDICIONAL TERNARIO SIMPLE ==== */
/**
function retornarMinimo(x, y) {
  return x < y ? x : y;
}

console.log(retornarMinimo(4,7));
console.log(retornarMinimo(8,2));
console.log(retornarMinimo(5,5)); */

/* ==== EJEMPLO 1 ==== */

var a = 5;
var b = 9;

/*
Si a es mayor que b
? Se cumple a + 2
: Caso contrario b * 3

Evaluando

5 > 9 = false
: 9 * 3 = 27

console.log(a > b ? a + 2 : b * 3);
*/

/* ==== OPERADOR CONDICIONAL TERNARIO MULTIPLE ==== */

function compararNumeros(a, b) {
  return a == b
    ? "a y b son iguales"
    : a > b
    ? "a es mayor que b"
    : "b es mayor que a";
}

console.log(compararNumeros(11, 11));
