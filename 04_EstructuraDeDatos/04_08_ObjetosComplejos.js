var ordenesDePizzas = [
  {
    nombre: "Pizza de peperoni",
    precio: 12.0,
    ingredientes: ["peperoni", "queso", "salsa de tomate"],
    paraLlevar: true,
  },
  {
    nombre: "Pizza de jamón y piña",
    precio: 10.0,
    ingredientes: ["jamón", "piña", "queso", "salsa de tomate"],
    paraLlevar: true,
  },
  {
    nombre: "Pizza de cuatro quesos",
    precio: 15.0,
    ingredientes: [
      "queso azul",
      "queso parmesano",
      "queso mozzarella",
      "queso cheddar",
      "salsa de tomate",
    ],
    paraLlevar: false,
  },
  {
    nombre: "Pizza de pollo",
    precio: 14.0,
    ingredientes: ["pollo", "queso", "salsa de tomate"],
    paraLlevar: true,
  },

  {
    nombre: "Pizza de carne",
    precio: 13.0,
    ingredientes: ["carne", "queso", "salsa de tomate"],
    paraLlevar: false,
  },
  {
    nombre: "Pizza de vegetales",
    precio: 11.0,
    ingredientes: [],
    paraLlevar: false,
  }
];

function agregarPizza(nombre, precio, ingredientes, paraLlevar) {
    var pizza = {
        nombre: nombre,
        precio: precio,
        ingredientes: ingredientes,
        paraLlevar: paraLlevar,
    };
    ordenesDePizzas.push(pizza);
}
console.log(ordenesDePizzas[5]);
ordenesDePizzas[5].ingredientes.push("ajo","cebolla","pimiento","tomate","berenjena");
console.log(ordenesDePizzas[5]);

