/* ==== Operador Rest ==== */

/* Este operador, va a darnos la facilidad de crear funciones muy versatiles (...)*/

function miFuncion(...args) {
  console.log(args.length);
}

// miFuncion(1, 2, 3, 4, 5, 6);

/* === EJEMPLO 01 === */

/* METODO QUE SUMA LOS NUMEROS DE UN ARREGLO */

const sumar = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};

console.log(sumar(3, 3));
