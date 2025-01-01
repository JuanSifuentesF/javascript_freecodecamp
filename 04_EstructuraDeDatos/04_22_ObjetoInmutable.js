/* ==== Objeto Inmutable ==== */

/* Como congelar un objeto, haciendolo inmutable */

let colores = {
  verde: "#10e04b",
  azul: "#1b50e0",
  negro: "#000000",
  blanco: "#ffffff",
};

Object.freeze(colores);

colores.verde = "#fff200";

console.log(colores);
