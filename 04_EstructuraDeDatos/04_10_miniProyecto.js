/*

Tenemos un objeto que representa parte de una colección 
de álbunes musicales.

Cada álbum tiene tiene un número de identificación unico (id)
asociado a otras propiedades.

No todos los álbunes tiene la información completa.

*/

var coleccionDeDiscos = {
  7853: {
    tituloDelAlbum: "Bee Gees Greatest",
    artista: "Bee Gees",
    canciones: ["Stayin Alive", "How Deep Is Your Love", "Night Fever"],
  },
  5439: {
    tituloDelAlbum: "ABBA Gold",
  },
};

/*

Define una función actualizarDiscos que tome los siguientes parámetros:
- discos (el objeto que represente la coleccion de discos).
- id.
- propiedad ("artista" o "canciones").
- valor.

Tu meta es completar la función implementando las siguientes reglas
para modificar el objeto pasado a la función:

- Si "valor" es una cadena vacía, elimina la propiedad del álbum correspondiente.

- Si "propiedad" es igual a la cadena de caracteres "canciones" pero
el álbum no tiene propiedad llamada "canciones", crea un arreglo 
vacío y agrega "valor" a ese arreglo.

- Si "propiedad" es igual a la cadena de caracteres "canciones" y
"valor" no es una cadena vacía, agregar "valor" al final del arreglo
de cacniones del álbum correspondiente.

- Si "valor" no es una cadena vacía y "propiedad" no es igual a
"canciones", asigna el valor del parámetro "valor" a la propiedad.
Si la propiedad no existe, debes crearla y asignar este valor.

*/

function actualizarDiscos(discos, id, propiedad, valor) {
  if (valor === "") {
    delete discos[id][propiedad];
  } else if (propiedad === "canciones") {
    discos[id][propiedad] = discos[id][propiedad] || [];
    discos[id][propiedad].push(valor);
  } else {
    discos[id][propiedad] = valor;
  }
}

console.log(coleccionDeDiscos[5439].artista);
actualizarDiscos(coleccionDeDiscos, 5439, "artista", "ABBA");
console.log(coleccionDeDiscos[5439].artista);
