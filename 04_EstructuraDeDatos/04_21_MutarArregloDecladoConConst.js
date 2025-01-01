/* ==== Mutar Arreglo Declarado con Const ==== */

/* Es posible alterar el valor de las constantes, por ejemplo dentro de un arreglo declarado como constante
   es posible alterar sus valores. */

const MI_ARREGLO = [1, 2, 3, 4];

console.log(MI_ARREGLO);

MI_ARREGLO[0] = 5;
MI_ARREGLO[1] = 5;
MI_ARREGLO[2] = 5;
MI_ARREGLO[3] = 5;

console.log(MI_ARREGLO);
