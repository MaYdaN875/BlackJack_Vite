
import _ from 'underscore';
import { crearDeck as createDeck,pedirCarta,acumularPunto,turnoComputadora,crearCarta } from './usecases';

let deck = [];
let inc = 0;
const tipos = ['C', 'D', 'H', 'S'],
    especiales = ['A', 'J', 'Q', 'K'];


let puntosJugadores = [];
//Referencias HTML 

const btnPedir = document.getElementById('btnPedir'),
    btnDetener = document.getElementById('btnDetener'),
    btnNuevo = document.getElementById('btnNuevo');

const puntos = document.querySelectorAll('small'),
    divCartas = document.querySelectorAll('.divCartas');


const initGame = (numJugadores = 1) => {
    deck = createDeck(tipos,especiales);
    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) {
        puntosJugadores.push(0)
        puntos[i].innerHTML = 0;
        divCartas[i].innerHTML = ' ';
    }

    btnPedir.disabled = false;
    btnDetener.disabled = false;

}




btnPedir.addEventListener('click', () => {
    const carta = pedirCarta(deck);
    let puntosJugador = acumularPunto(carta, 0,puntosJugadores,puntos);
    crearCarta(carta, 0,divCartas);


    if (puntosJugador > 21) {
        console.log('Lo siento mucho, perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador,deck,puntosJugadores,puntos,divCartas);
    } else if (puntosJugador === 21) {
        console.log("Increible 21");
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador,deck,puntosJugadores,puntos,divCartas);
    }
});

btnDetener.addEventListener('click', () => {
    let puntosJugador = acumularPunto('0D', 0,puntosJugadores,puntos,divCartas);
    console.log("detenido")
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador,deck,puntosJugadores,puntos,divCartas);
});

btnNuevo.addEventListener('click', () => {
    initGame(2);

});
