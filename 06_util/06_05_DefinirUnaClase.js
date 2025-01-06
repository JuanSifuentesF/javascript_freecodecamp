/* ==== Definir una clase ==== */

class TransbordadorEspacial {
  constructor(planeta) {
    this.planeta = planeta;
  }
}

/* ==== EJEMPLO 01 ==== */

var zeus = new TransbordadorEspacial("Jupiter");

console.log(zeus.planeta);

var apolo = new TransbordadorEspacial("Marte");
console.log(apolo.planeta);

/* ==== EJEMPLO 02 ==== */

class Mascota {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

var miMascota = new Mascota("Nora", 5);
var tuMascota = new Mascota("Gino", 2);

console.log(miMascota.nombre);
console.log(miMascota.edad);

console.log(tuMascota.nombre, tuMascota.edad);
