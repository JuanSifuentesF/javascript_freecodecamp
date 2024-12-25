//Dos tipos de variables

// Variables en ambito global
var miVariableGlobal = 5;

console.log(miVariableGlobal);

function miFuncion() {
  console.log(miVariableGlobal);
}

miFuncion();

console.log(miVariableGlobal);
