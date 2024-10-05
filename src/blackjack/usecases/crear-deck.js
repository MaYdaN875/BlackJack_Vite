import _ from 'underscore';



/**
 * 
 * @param {Array<string>} tiposCarta 
 * @param {Array <string>} tiposEspeciales 
 * @returns {Array} returns a new deck
 */



export const crearDeck = (tiposCarta,tiposEspeciales) => {
    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposCarta) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposCarta) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }

    return _.shuffle(deck);
}
