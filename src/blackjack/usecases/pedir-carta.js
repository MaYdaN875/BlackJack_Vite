/**
 * 
 * @param {*Array <String>} deck 
 * @returns returns the letter value and the deck without one element  
 */

export const pedirCarta = (deck) => {

    if (deck.length === 0) {
        throw 'No hay mas cartas en el Deck'
    }
   
    return deck.pop();
}

export default pedirCarta;