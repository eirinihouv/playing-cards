import React, { Component } from 'react';
import Board from './components/Board';
import './styles/game.css';
import './styles/cards.css';

//import { createStore } from 'redux';
//import poker from './models/poker/reducers';

//import { PokerHandRate, RateableCards } from './libs/poker';


class App extends Component {
  /*constructor(props) {
    super(props);
    this.state = {
      ranks: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
      suits: ['clubs', 'hearts', 'diamonds', 'spades'],
      deck: [],
      hand: [],
    };
  }*/

  componentWillMount() {
    /*this.setState({
      deck: shuffle(getDeck(this.state.ranks, this.state.suits)),
    });    */
  }

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
      <div className="playingCards">
        <Board />
      </div>
    );
  }
}

export default App;
