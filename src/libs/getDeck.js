//import shuffle from './shuffle';

////////////////////////////////////////////////////////
//                                                    //  
//--------------------  Get Deck  --------------------//
///                                                   //
////////////////////////////////////////////////////////

const getDeck = (ranks , suits) => {
  const deck = [];
  ranks.forEach(
      (rank, weight) => {
        for(const suit of suits) {
          deck.push({rank, suit, weight});
        }
      }  
    );
    return deck;
};

export default getDeck;