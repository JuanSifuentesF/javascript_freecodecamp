/* ==== Getters y Setters ==== */

class Libro {
  constructor(autor) {
    this._autor = autor;
  }

  get autor() {
    return this._autor;
  }

  set autor(nuevoAutor) {
    console.log("Setter");
    return (this._autor = nuevoAutor);
  }
}

const libro = new Libro("anonimo");
console.log(libro.autor);

libro.autor = "Gino Smith";
console.log(libro.autor);
