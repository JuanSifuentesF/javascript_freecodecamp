/* ==== Valores por Defecto para Parámetros para una funcion FLECHA==== */

/**/


// Funcion Normal
const incrementar2 = function (num, valor = 1){
    return num + valor;
}

// Funcion Flecha
const incrementar = (num, valor = 1) => num + valor;

console.log(incrementar(5, 3));
