/* ==== Sintaxis de Desestructuración ==== */
/** Pasar Objeto como Argumento */

/**La sintaxys de desestructuracion tambien se puede usar para pasar un objeto
 * como argumento.
 */

/* ==== EJEMPLO 01 ==== */

// Se crear un objeto, representa un nuevo perfil de un cliente.
var nuevoPerfilCliente = {
  nombre: "Jane Doe",
  edad: 24,
  nacionalidad: "Española",
  ubicacion: "España",
};

// Se crea una funcion "actualizarPerfil"
// const actualizarPerfil = (informacionDePerfil) => {
//   // Se desestructura el objeto "informacionDePerfil" para obtener los valores."
//   const { nombre, edad, nacionalidad, ubicacion } = informacionDePerfil;
//   console.log(nombre);
//   console.log(edad);
//   console.log(nacionalidad);
//   console.log(ubicacion);
// };

const actualizarPerfil = ({ nombre, edad, nacionalidad, ubicacion }) => {
  console.log(nombre);
  console.log(edad);
  console.log(nacionalidad);
  console.log(ubicacion);
};

// actualizarPerfil(nuevoPerfilCliente);

/* ==== EJEMPLO 02 ==== */

const estadisticas = {
  max: 56.78,
  desviacionEstandar: 4.34,
  mediana: 34.54,
  moda: 23.87,
  min: -0.75,
  promedio: 35.85,
};

const mitad = ({ max, min }) => (max + min) / 2.0;

console.log(mitad(estadisticas));
