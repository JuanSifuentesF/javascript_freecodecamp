/* ==== Métodos ==== */

// Primera forma
const persona = {
  nombre: "Isabel",
  presentarse: function () {
    return `Hola mi nombre es ${this.nombre}.`;
  },
};
console.log(persona.presentarse());

// Segunda forma
const persona1 = {
  nombre: "Isabel",
  presentarse: () => `Hola, mi nombre es ${persona1.nombre}.`,
};
console.log(persona1.presentarse());

// Tercera forma
const persona2 = {
  nombre: "Isabel",
  presentarse() {
    return `Hola, mi nombre es ${persona2.nombre}.`;
  },
};
console.log(persona2.presentarse());
