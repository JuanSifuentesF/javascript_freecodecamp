/*
Descripcion:

En el juego de casino Blackjack el jugador puede sacarle
ventaja a la casa llevando un registro del numerorelativo
de cartas atas y bajas que quedan en la baraja.

Esto se llama "conteo de cartas".

Tener mas cartas altas en la baraja es una ventaja para el
jugador. Se le asigna un valor a cada carta de acuerdo a la siguiente tabla.

- Cuando el conteo es positivo, el jugador deberia apostar alto.
- Cuando el conteo es 0 o negativo, el jugador deberia apostar bajo.

Cambio del conteo       Cartas
-------------------------------

+1                      2, 3, 4, 5, 6
0                       7, 8, 9
-1                      10, 'J', 'Q', 'K', 'A'

Nuestra meta es definir una funcion para contar cartas.

La funcion debe tomar un parametro carta que puede ser
un numero o una cadena de caracteres y luego aumentar
o reducir el valor de la variable global conteo
de acuerdo al valor de la carta (observa la tabla).

La funcion debe retornar una cadena de caracteres con el
conteo actual y la cadena:

- "Apostar" si el conteo es positivo.
- "Esperar" si el conteo es cero o negativo

El conteo actual y la decision del jugador
("Apostar" o "Esperar") deben ser separados por un espacio.

*/

var conteo = 0;

function contarCartas(carta) {
    var decision;
    switch (carta) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            conteo++;
            break;
        case 7:
        case 8:
        case 9:
            conteo += 0;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            conteo--;
            break;
    }
    if (conteo > 0) {
        decision = "Apostar";
    } else {
        decision = "Esperar";
    }

    return conteo + " " + decision;
}