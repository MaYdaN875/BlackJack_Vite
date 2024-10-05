import {valorCarta} from './'

/**
 * 
 * @param {*} carta 
 * @param {*} turno 
 * @param {*} puntosJugadores 
 * @param {*} puntos 
 * @returns 
 */
export const acumularPunto = (carta, turno,puntosJugadores,puntos) => {
    
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntos[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}