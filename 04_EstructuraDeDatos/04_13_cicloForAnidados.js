/* ==== Ciclo For anidados  ==== */

var miArreglo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (var i = 0; i < miArreglo.length; i++) {
  console.log("> Nueva iteración");
  var arregloAnidado = miArreglo[i]; // Arreglo
  console.log("Arreglo: " + arregloAnidado);
  
  for (var j = 0; j < arregloAnidado.length; j++) {
    console.log(">>> Ciclo anidado: ");
    console.log("Elemento: ");
    console.log(arregloAnidado[j]); // Elemento
  }
}
