import React, { Component } from 'react';
import Board from './components/Board';
import ResetGame from './components/ResetGame';
import './styles/game.css';
import './styles/cards.css';

class App extends Component {
  render() {
    /*const store = createStore(poker);
    console.log('-------------------------');
    console.log(store.getState());
    console.log('-------------------------');
    console.log(store.dispatch({ type: 'DEAL_CARDS' }));
    console.log('-------------------------');
    console.log(store.getState());
    console.log('-------------------------');
    console.log(PokerHandRate(new RateableCards(store.getState().cards)));*/

    return (
      <div className="playingCards simpleCards">
        <ResetGame />
        <Board />
      </div>
    );
  }
}

export default App;
