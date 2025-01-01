/* ==== var vs let ==== 

let campista = "James";
campista = "David";

console.log(campista);*/

/*
    Con Var es posible crear varias variables con el mismo nombre.
    Con let no es posible.
*/

/* ==== Ambito de var vs let ==== */

// var miVariableGlobal = 4;

// console.log(miVariableGlobal);

// function miFuncion() {
//   console.log(miVariableGlobal);

//   var miVariableLocal = 8;
//   console.log(miVariableLocal);
// }

// miFuncion();

// console.log(miVariableGlobal);
// console.log(miVariableLocal);

/* ==== Ejemplo 01 ==== 

>> Usando Let en un for 

for (let i = 0; i < 3; i++) {
  console.log(i);
}

console.log("Variable: " + i);
*/

/* ==== Ejemplo 02 ==== */

var mostrarColor = true;

if (mostrarColor) {
  let color = "verde";
  console.log("Mi color favorito es: " + color);
}

console.log(color);

// Var crea una variable que se puede usar a nivel global o dentro de una funcion
// Let restringe el ambito de la variable al bloque o la expresion donde la variable fue declarada o definida
