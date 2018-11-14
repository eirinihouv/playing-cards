import React from 'react';
import { connect } from 'react-redux';
import Cards from './Cards';
import HandRate from './HandRate';

const PlayerHand = ({ player }) => (
  <div>
    <Cards cards={player.cards} />
    <HandRate cards={player.cards} />
  </div>
  
);
  
const mapStateToProps = ({ player }) => ({ player });

export default connect(mapStateToProps)(PlayerHand);