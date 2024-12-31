// ciclo for

/* ==== Lo Basico ==== 

var miArreglo = [];

for (var i = 0; i < 10; i++) {
  miArreglo.push(i);
}

console.log(miArreglo);*/

/* ==== Ejemplo 01 ==== 

Numeros Impares


var miArreglo = [];

for (var i = 1; i < 50; i += 2) {
  miArreglo.push(i);
}

console.log(miArreglo);*/

/* ==== Ejemplo 02 ==== 

Reducir valores


for ( var i = 15; i >= 10; i-=2){
  console.log(i)
}*/

/* ==== Ejemplo 02 ==== 

var miArreglo = [];

for (var i = 10; i > 0; i -= 2) {
  miArreglo.push(i);
}

console.log(miArreglo);
*/

/* ==== Iterar sobre un Arreglo con un Ciclo FOR ==== */

var miArreglo = [4, 6, 8, 2];
var total = 0;

for (var i = 0; i < miArreglo.length; i++) {
  // console.log("Iteracion " + i);
  // console.log(miArreglo[i]);
  total += miArreglo[i];
}

//console.log(total);

var lenguajes = ["JavaScript", "Python", "Java", "C++"];

for (var i = 0; i < lenguajes.length; i++) {
  // console.log("Iteracion " + i);
  // console.log(lenguajes[i]);
  // console.log(lenguajes[i].toLocaleUpperCase());
}

/* ==== Usando un FOR dentro de una función  ==== */

function contarNumerosPares(arreglo) {
  var total = 0;
  for (var i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 == 0) {
      total++;
    }
  }
  return total;
}

console.log(contarNumerosPares([5, 2, 1, 3, 4, 8]));
