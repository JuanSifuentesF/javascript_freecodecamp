/* ==== NUMEROS ALEATORIOS  ==== */

function generarFraccionAleatoria() {
  return Math.random(); // [0,1]
}

// console.log(generarFraccionAleatoria());
// console.log(generarFraccionAleatoria());
// console.log(generarFraccionAleatoria());
// console.log(generarFraccionAleatoria());
// console.log(generarFraccionAleatoria());

// var numeroRandom = Math.random();

// console.log(numeroRandom);

/* ==== NUMEROS ALEATORIOS ENTEROS ==== */
/* 
var numeroAleatorioEntre0y19 = Math.floor(Math.random() * 20);

// console.log(numeroAleatorioEntre0y19)

function generarFraccionAleatoria(limiteSuperior) {
  // Generar un entero aleatorio entre 0 y el límite
  // superior (sin incluirlo)
  return Math.floor(Math.random() * limiteSuperior);
}

for (var i = 0; i < 15; i++){
    console.log(generarFraccionAleatoria(5));
}
*/

/* ==== NUMEROS ALEATORIOS ENTEROS EN UN RANGO ==== */

function rangoAleatorio(limiteInferior, limiteSuperior) {
  return (
    Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1)) +
    limiteInferior
  );
}

for (var i = 0; i < 8; i++){
    console.log(rangoAleatorio(3, 8));
}



