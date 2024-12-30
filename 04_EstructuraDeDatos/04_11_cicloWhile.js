/* ==== Ejemplo 01 ====

ciclo while || bucle while (loop while)

El ciclo while se ejecuta mientras la condición sea verdadera

var i = 0;

while (i <= 3) {
  console.log("Hola Mundo");
  i++;
}*/

/* ==== Ejemplo 02 ====
var miArreglo = [];
var i = 0;

console.log(miArreglo);

while (i < 10) {
  miArreglo.push(i);
  i++;
}

console.log(miArreglo);*/

/* ==== Ejemplo 03 ==== */

var numeros = [2, 3, 4, 5, 6, 8, 9, 34];

while (numeros.length > 4) {
  numeros.pop();
}

console.log(numeros);
