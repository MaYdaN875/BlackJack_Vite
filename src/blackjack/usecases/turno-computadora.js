import {pedirCarta} from './'
import {acumularPunto} from './';
import {crearCarta} from './';

export const turnoComputadora = (puntosMinimos,deck=[],puntosJugadores,puntos,divCartas) => {
    let puntosComputadora = 0;
    
    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPunto(carta, puntosJugadores.length - 1,puntosJugadores,puntos);
        crearCarta(carta, puntosJugadores.length - 1,divCartas);


    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {


        if (puntosComputadora === puntosMinimos) {
            alert('Nadie Gana');
        } else if (puntosMinimos > 21) {
            alert('Computadora Gana');
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana');
        }
    }, 50);
}