/* ==== Operador spread ==== */

/* Realizar lo contrario a lo explicado de rest (...)  */

const numeros = [1, 2, 3];

// function sumar(x, y, z) {
//   return x + y + z;
// }
/** 
const sumar1 = (x, y, z) => {
  console.log("Primera parametro: " + x);
  console.log("Segundo parametro: " + y);
  console.log("Tercer parametro: " + z);
  return x + y + z;
};

console.log(sumar(...numeros));
*/

/**
 * Muchas llamadas: Si vas a llamar a la función muchas veces y no
 * quieres ver todos los console.log, puedes condicionarlos a una 
 * variable booleana:
 */
const debug = true; // Cambia a false para desactivar los logs

const sumar = (x, y, z) => {
  if (debug) {
    console.log("x:", x);
    console.log("y:", y);
    console.log("z:", z);
  }
  return x + y + z;
};

console.log(sumar(...numeros));
