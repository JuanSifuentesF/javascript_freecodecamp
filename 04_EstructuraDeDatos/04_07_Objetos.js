var miPerro = {
  nombre: "Firulais",
  edad: 5,
  peso: 6,
  raza: "Chihuahua",
  numeroDePatas: 4,
  numeroDeOjos: 2,
};

//console.log(miPerro.numeroDePatas);

// 1.- Acceder a Propiedades: Variables

var resultados = {
  1: "nora256",
  2: "gino577",
  3: "esterf543",
  4: "kiara566",
};

//var posicion = 4;

//resultados[posicion];

//console.log(resultados[posicion]);

/* 2-. Actualizar Propiedades */

var mochila = {
  color: "azul",
  tamaño: "mediano",
  contenido: ["botella de agua", "cuaderno", "lapiz"],
};

// console.log(mochila.color);
// mochila.color = "verde";
// console.log(mochila.color);
// console.log(mochila.contenido);

// mochila.contenido.push("libro");
// console.log(mochila.contenido);

// mochila.contenido = [];

// console.log(mochila.contenido);

// 3.- Agregar Propiedades

var curso = {
  titulo: "Aprende Javascript desde Cero",
  idioma: "Español",
  duracion: 30,
};

// curso["vistas"] = 34500;
// console.log(curso.vistas);
// console.log(curso);

// 4.- Eliminar Propiedades
// console.log(curso.idioma);
// delete curso.idioma;
// console.log(curso);
// console.log(curso.idioma);

// 5.- Objetos para Búsquedas.

function buscarElementoQuimico(simbolo) {
  var simbolosQuimicos = {
    Al: "Aluminio",
    S: "Azufre",
    Cl: "Cloro",
    He: "Helio",
    B: "Boro",
    Li: "Litio",
  };

  return simbolosQuimicos[simbolo];
}

// console.log(buscarElementoQuimico("Al"));
// console.log(buscarElementoQuimico("B"));
// console.log(buscarElementoQuimico("Cl"));
// console.log(buscarElementoQuimico("He"));
// console.log(buscarElementoQuimico("Li"));
// console.log(buscarElementoQuimico("S"));

// 6.- Verificar si una propiedad existe

var miCuaderno = {
  paginas: 200,
  marca: "Oxford",
  color: "Verde",
  categoria: 3,
  precio: 4.56,
};

// console.log(miCuaderno.hasOwnProperty("precio"));
// console.log(miCuaderno.hasOwnProperty("origen"));

function verificarPropiedad(obj, propiedad){
    if(obj.hasOwnProperty(propiedad)){
        return "Propiedad: " + obj[propiedad];
    } else {
        return "La propiedad " + propiedad + " no existe";
    }
}

console.log(verificarPropiedad(miCuaderno, "origen"));