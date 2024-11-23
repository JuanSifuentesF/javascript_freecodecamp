var lenguajeDeProgramacion = "JavaScript";

/**
 * Cadena:  J a v a S c r i p t
 * Índices: 0 1 2 3 4 5 6 7 8 9
 */

console.log(lenguajeDeProgramacion[0])


// Inmutabilidad

var miCadena = "Jola, Mundo"
console.log(miCadena)
miCadena = "Hola, Mundo"
console.log(miCadena)
/**
console.log(lenguajeDeProgramacion[0]); // J
console.log(lenguajeDeProgramacion[1]); // a
console.log(lenguajeDeProgramacion[2]); // v
console.log(lenguajeDeProgramacion[3]); // a
console.log(lenguajeDeProgramacion[4]); // S
console.log(lenguajeDeProgramacion[5]); // c
console.log(lenguajeDeProgramacion[6]); // r
console.log(lenguajeDeProgramacion[7]); // i
console.log(lenguajeDeProgramacion[8]); // p
console.log(lenguajeDeProgramacion[9]); // t
 */
//Notacion de corchetes, para acceder al ultimo de una cadena.

/**
 * EL último índice siempre es longitud - 1 porque comienza a contar desde 0.
 * 
 * miCadena.length para "JavaScript" es 10.
 * 
 * El ultimo índice es 9
 * 
 * 
 */

console.log(lenguajeDeProgramacion[lenguajeDeProgramacion.length-1]);


/**El peniultimo indice es la longitud - 2 */
var cadena = "JavaScript";
n = 3;
console.log(cadena[cadena.length-n])


