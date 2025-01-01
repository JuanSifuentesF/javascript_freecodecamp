/* ==== Constante "const" ==== */

/* Solo puede ser usadas para acceder a ese valor,
   no podemos modificar ese valor asignado por primera vez 
*/

const MI_CONSTANTE = 35; // Se debe de asignar un valor en la misma linea

console.log(MI_CONSTANTE);

/* ==== Ejemplo 01 ==== */

function calcularAreaCirculo(radio) {
  const PI = 3.14;

  if (radio < 0) {
    return undefined;
  }

  return PI * radio ** 2;
}

console.log(calcularAreaCirculo(10));
